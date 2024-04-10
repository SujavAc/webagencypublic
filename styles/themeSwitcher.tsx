import { PaletteMode } from "@mui/material";
import theme from "@/styles/theme";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    ...(mode === "light"
      ? { ...theme.palette }
      : {
          // palette values for dark mode
          mode: "dark",
          primary: {
            main: "rgb(143,202, 249, 1)",
            light: "#42a5f5",
            dark: "#1565c0",
            contrastText: "rgb(255, 255, 255)",
          },
          secondary: {
            main: "#9c244e",
            light: "rgb(255, 255, 255)",
            dark: "rgb(10, 33, 15)",
            contrastText: "rgb(255, 255, 255)",
          },
          text: {
            primary: "#fff",
            secondary: "rgba(255, 255, 255, 0.7)",
            disabled: "rgba(152,81,81,0.38)",
          },
          background: {
            default: "#121212",
            paper: "#272727",
          },
          action: {
            disabled: "rgba(255, 255, 255, 1)",
            disabledBackground: "rgba(255, 255, 255, 1)",
            disabledOpacity: 0.48,
          },
          error: {
            main: "rgb(244, 67, 54)",
            light: "#713a34",
            dark: "#b5685f",
            contrastText: "rgb(255, 255, 255)",
          },
          warning: {
            main: "#c19c64",
            light: "#8e7148",
            dark: "#d0ab73",
            contrastText: "rgb(255, 255, 255)",
          },
          info: {
            main: "#4fa1e4",
            light: "#3373a8",
            dark: "#285173",
            contrastText: "rgb(255, 255, 255)",
          },
          success: {
            main: "#76d879",
            light: "#58c15b",
            dark: "#2b752d",
            contrastText: "rgb(255, 255, 255)",
          },
          divider: "#1976d2",
          tonalOffset: 0.2,
        }),
  },
  ...theme.typography,
  ...theme.breakpoints,
  ...theme.shape,
  ...theme.transitions,
  ...theme.components,
});
