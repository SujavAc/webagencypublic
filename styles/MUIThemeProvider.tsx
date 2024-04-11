import { useTheme } from "next-themes";
// import { GlobalStyles } from "@mui/material";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React, { FC, useCallback, useEffect, useState } from "react";
import { getDesignTokens } from "./themeSwitcher";

const MUIThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { resolvedTheme } = useTheme();

  const desiredTheme = getDesignTokens(resolvedTheme);

  return (
    <ThemeProvider theme={desiredTheme}>
      {/* <CssBaseline /> */}
      {/* <GlobalStyles styles={globalStyles} /> */}
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
