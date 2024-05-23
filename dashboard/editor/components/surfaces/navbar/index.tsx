"use client";
import { Menu } from "@/types/menu";
import AppBarNav from "../../common/surfaces/appbar";

interface HeaderProps {
  id: string;
  menuData: Menu[];
  logoImageUrl: string;
  logoImageSvg: string;
  isAuthenticationRequired: boolean;
}

const Header = (props: HeaderProps) => {
  return <AppBarNav {...props} />;
};

export default Header;
