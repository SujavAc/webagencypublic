import theme from "@/styles/theme";

export const getDesignTokens = (mode: string) => {
  const { darkTheme, lightTheme } = theme;

  return {
    ...(mode === "light" ? lightTheme : darkTheme),
  };
};
