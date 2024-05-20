// pages/[id].js
"use client";
import ErrorPage from "@/components/Error";
import { puckEditorConfig } from "@/dashboard/editor/config";
import { Preview } from "@/dashboard/editor/preview";
import { useUserAuth } from "@/database/authentication/authContext";
import { getItem } from "@/seo";
import { useAppSelector, useAppDispatch } from "@/store/hook";
import { Backdrop, Box, CircularProgress } from "@mui/material";
import { circularProgressClasses } from "@mui/material/CircularProgress";
import { useParams, redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { user } = useUserAuth();
  const pathname = useParams();
  const slugArray = Array.isArray(pathname?.slug)
    ? pathname?.slug
    : [pathname?.slug];
  const slug = decodeURI(slugArray?.join("/"));
  const [pageContent, setPageContent] = useState(null);
  const [headerContent, setHeaderContent] = useState(null);
  const [footerContent, setFooterContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const pageData = useAppSelector((state) => state.pages.pagesData);
  const headerData = useAppSelector((state) => state.pages.headerData);
  const footerData = useAppSelector((state) => state.pages.footerData);
  const dispatch = useAppDispatch();

  const authRequiredRoute = ["dashboard", "dashboard/"];

  const pageContentDataFromStore =
    pageData &&
    pageData?.filter((data) => data?.pageName === (slug || "homepage"));

  const getHeaderData = async () => {
    if (headerData && headerData?.length < 1) {
      const { data } = await getItem("header");
      console.log("database header data");
      setHeaderContent(data[0]);
      return dispatch({ type: "ADD_HEADER_DATA", payload: data });
    }
    console.log("local header data", headerData[0]);
    return setHeaderContent(headerData[0]);
  };

  const getFooterData = async () => {
    if (footerData && footerData?.length < 1) {
      const { data } = await getItem("footer");
      console.log("database footer data");
      setFooterContent(data[0]);
      return dispatch({ type: "ADD_FOOTER_DATA", payload: data });
    }
    console.log("local footer data");
    return setFooterContent(footerData[0]);
  };

  useEffect(() => {
    const fetchPageContent = async (route: string) => {
      try {
        await getHeaderData();
        await getFooterData();
        if (pageContentDataFromStore && pageContentDataFromStore?.length > 0) {
          setLoading(false);
          console.log("local data");
          return setPageContent(pageContentDataFromStore[0]);
        }
        const { data, lastVisibleDoc, hasMore } = await getItem(route);

        const pageData = data[0];
        dispatch({ type: "ADD_PAGES_DATA", payload: data });
        dispatch({
          type: "LAST_PAGES_DOCUMENT_READ_DATA",
          payload: lastVisibleDoc,
        });
        dispatch({
          type: "PAGES_HAS_MORE_DATA",
          payload: hasMore,
        });
        setPageContent(pageData);
        console.log("database data");
        return setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching blog content:", error);
      }
    };
    if (slug && authRequiredRoute?.includes(slug) && !user?.uid) {
      redirect("/signin");
      setLoading(false);
      // Render the default homepage
    } else if (slug) {
      setLoading(true);
      fetchPageContent(slug);
    } else {
      setLoading(true);
      // Render the default homepage
      fetchPageContent("homepage");
    }
  }, [slug]);

  if (!pageContent && !loading) {
    return <ErrorPage />;
  }

  return (
    <section id={slug} className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        {loading ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open
          >
            <Box sx={{ position: "relative" }}>
              <CircularProgress
                variant="determinate"
                sx={{
                  color: (theme) =>
                    theme.palette.grey[
                      theme.palette.mode === "light" ? 200 : 800
                    ],
                }}
                size={40}
                thickness={4}
                value={100}
              />
              <CircularProgress
                variant="indeterminate"
                disableShrink
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
                  animationDuration: "550ms",
                  position: "absolute",
                  left: 0,
                  [`& .${circularProgressClasses.circle}`]: {
                    strokeLinecap: "round",
                  },
                }}
                size={40}
                thickness={4}
              />
            </Box>
          </Backdrop>
        ) : (
          <>
            <Preview config={puckEditorConfig} data={headerContent} />
            <Preview config={puckEditorConfig} data={pageContent} />
            <Preview config={puckEditorConfig} data={footerContent} />
          </>
        )}
      </div>
    </section>
  );
};

export default Page;
