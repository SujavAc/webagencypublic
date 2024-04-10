"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { ColorModeContext } from "@/styles/ColorModeContext";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { getDesignTokens } from "@/styles/themeSwitcher";
import { Providers } from "./providers";
import store from "@/store/reducer/rootReducer";
import MySnackbarStack from "@/components/Snackbar";
import { UserAuthContextProvider } from "@/database/authentication/authContext";
import "react-quill/dist/quill.snow.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // light and dark Theme
  const [mode, setMode] = React.useState<"light" | "dark">("light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode: mode,
    }),
    [mode],
  );

  const darkTheme = getDesignTokens(mode);

  const theme = React.useMemo(
    () => createTheme({}, darkTheme),

    [darkTheme],
  );
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <ReduxProvider store={store}>
          <ColorModeContext.Provider value={colorMode}>
            <UserAuthContextProvider>
              <ThemeProvider theme={theme}>
                <AppRouterCacheProvider options={{ key: "css" }}>
                  <MySnackbarStack>
                    <Providers>
                      {children}
                      <ScrollToTop />
                    </Providers>
                  </MySnackbarStack>
                </AppRouterCacheProvider>
              </ThemeProvider>
            </UserAuthContextProvider>
          </ColorModeContext.Provider>
        </ReduxProvider>
      </body>
    </html>
  );
}
