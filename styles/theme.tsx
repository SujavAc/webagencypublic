"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
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
      primary: "rgb(0,0,0,0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(152,81,81,0.38)",
    },
    background: {
      default: "#fff",
      paper: "#ffff",
    },
    action: {
      disabled: "rgba(0, 0, 0, 1)",
      disabledBackground: "rgba(0, 0, 0, 0.5)",
      disabledOpacity: 0.5,
    },
    error: {
      main: "rgb(211, 47, 47)",
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
  },
  typography: {
    // fontFamily: roboto.style.fontFamily,
    fontFamily: [
      "Roboto", // Default font for Material Design
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: 16, // Base font size
    fontWeightRegular: 400, // Regular font weight
    fontWeightMedium: 500, // Medium font weight
    fontWeightBold: 700, // Bold font weight
    h1: {
      fontSize: "2.25rem", // 36px
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.875rem", // 30px
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.5rem", // 24px
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.25rem", // 20px
      fontWeight: 500,
    },
    h5: {
      fontSize: "1.125rem", // 18px
      fontWeight: 500,
    },
    h6: {
      fontSize: "1rem", // 16px
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "1rem", // 16px
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "0.875rem", // 14px
      fontWeight: 400,
    },
    body1: {
      fontSize: "1rem", // 16px
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem", // 14px
      fontWeight: 400,
    },
    button: {
      fontSize: "0.875rem", // 14px
      fontWeight: 500,
      textTransform: "uppercase",
    },
    caption: {
      fontSize: "0.75rem", // 12px
      fontWeight: 400,
    },
    overline: {
      fontSize: "0.625rem", // 10px
      fontWeight: 400,
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: 4,
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
    easing: {
      // This is the most common easing curve.
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
    MuiTypography: {
      styleOverrides: {
        button: {
          fontSize: "1rem",
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
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
      disabledBackground: "rgba(255, 255, 255, 0.5)",
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
  },
  typography: {
    // fontFamily: roboto.style.fontFamily,
    fontFamily: [
      "Roboto", // Default font for Material Design
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: 16, // Base font size
    fontWeightRegular: 400, // Regular font weight
    fontWeightMedium: 500, // Medium font weight
    fontWeightBold: 700, // Bold font weight
    h1: {
      fontSize: "2.25rem", // 36px
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.875rem", // 30px
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.5rem", // 24px
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.25rem", // 20px
      fontWeight: 500,
    },
    h5: {
      fontSize: "1.125rem", // 18px
      fontWeight: 500,
    },
    h6: {
      fontSize: "1rem", // 16px
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "1rem", // 16px
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "0.875rem", // 14px
      fontWeight: 400,
    },
    body1: {
      fontSize: "1rem", // 16px
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem", // 14px
      fontWeight: 400,
    },
    button: {
      fontSize: "0.875rem", // 14px
      fontWeight: 500,
      textTransform: "uppercase",
    },
    caption: {
      fontSize: "0.75rem", // 12px
      fontWeight: 400,
    },
    overline: {
      fontSize: "0.625rem", // 10px
      fontWeight: 400,
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: 4,
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
    easing: {
      // This is the most common easing curve.
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
    MuiTypography: {
      styleOverrides: {
        button: {
          fontSize: "1rem",
        },
      },
    },
  },
});

export default { lightTheme, darkTheme };
