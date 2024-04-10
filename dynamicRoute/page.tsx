// pages/[id].js
"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { puckEditorConfig } from "@/dashboard/editor/config";
import { Preview } from "@/dashboard/editor/preview";
import { getData } from "@/database/paginateData";
import { useAppSelector, useAppDispatch } from "@/store/hook";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const pathname = useParams();
  const slugArray = Array.isArray(pathname?.slug)
    ? pathname?.slug
    : [pathname?.slug];
  const slug = decodeURI(slugArray?.join("/"));
  console.log(slug);
  const [pageContent, setPageContent] = useState(null);
  const pageData = useAppSelector((state) => state.pages.pagesData);
  const dispatch = useAppDispatch();
  const pageContentDataFromStore =
    pageData && slug && pageData?.filter((data) => data?.pageName === slug);

  useEffect(() => {
    const fetchPageContent = async () => {
      try {
        if (pageContentDataFromStore && pageContentDataFromStore?.length > 0) {
          return setPageContent(pageContentDataFromStore[0]);
        }
        const { data, lastVisibleDoc, hasMore } = await getData("pages", 1, {
          key: "pageName",
          filterOperation: "==",
          value: slug,
        });
        const pageData = data[0];
        dispatch({ type: "Get_PAGES_DATA", payload: data });
        dispatch({
          type: "LAST_PAGES_DOCUMENT_READ_DATA",
          payload: lastVisibleDoc,
        });
        dispatch({
          type: "PAGES_HAS_MORE_DATA",
          payload: hasMore,
        });
        return setPageContent(pageData);
      } catch (error) {
        console.error("Error fetching blog content:", error);
      }
    };
    if (slug) {
      fetchPageContent();
    }
  }, [slug]);

  if (!pageContent) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Breadcrumb
        pageName={slug}
        description="Welcome to A-Tech Web Agency, where innovation meets excellence. We specialize in crafting bespoke digital solutions that elevate your online presence. Our dynamic team combines creativity and technical prowess to deliver cutting-edge websites and applications. From concept to execution, we're dedicated to bringing your vision to life. Join us in the journey towards digital success."
      />
      <section id={slug} className="overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="container">
          <Preview config={puckEditorConfig} data={pageContent} />
        </div>
      </section>
    </>
  );
};

export default Page;
