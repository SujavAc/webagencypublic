import ButtonWrapper from "@/dashboard/editor/components/common/Inputs/Button";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <ButtonWrapper
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
      iconButton
      color="primary"
      startIcon={resolvedTheme === "dark" ? "LightMode" : "DarkMode"}
    />
  );
};

export default ThemeToggler;
