"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import MUIThemeProvider from "@/styles/MUIThemeProvider";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { Providers } from "./providers";
import store from "@/store/reducer/rootReducer";
import MySnackbarStack from "@/components/Snackbar";
import { UserAuthContextProvider } from "@/database/authentication/authContext";
import "react-quill/dist/quill.snow.css";
import { ManageScroll } from "@/utils/anchorScroll";
import { LocalStorageProvider } from "@/database/localStorageContext";
import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body style={{ margin: "inherit" }}>
        <ReduxProvider store={store}>
          <ManageScroll>
            <Providers>
              <MUIThemeProvider>
                <UserAuthContextProvider>
                  <MySnackbarStack>
                    <LocalStorageProvider>
                      <AppRouterCacheProvider options={{ key: "css" }}>
                        {children}
                        <ScrollToTop />
                      </AppRouterCacheProvider>
                    </LocalStorageProvider>
                  </MySnackbarStack>
                </UserAuthContextProvider>
              </MUIThemeProvider>
            </Providers>
          </ManageScroll>
        </ReduxProvider>
      </body>
    </html>
  );
}
