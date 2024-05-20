import * as React from "react";
import AppBar, { AppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import DrawerList from "../../Navigation/drawer";
import NextLink from "next/link";
import Image from "next/image";
import ButtonWrapper from "../../Inputs/Button";
import ThemeToggler from "@/components/Header/ThemeToggler";
import { usePathname } from "next/navigation";
import { UserType, useUserAuth } from "@/database/authentication/authContext";
import MenuComponent from "../../../navigation/menu";
import { useScrollTrigger } from "@mui/material";
import { Transition } from "../../../animation";
import { Menu } from "@/types/menu";
import PurifyText from "../../PurifyText";

interface IAppBarNav extends AppBarProps {
  id: string;
  menuData: Menu[];
  logoImageUrl?: string;
  logoImageSvg?: string;
  enableLogoutButton?: boolean;
}

export default function AppBarNav(props: IAppBarNav) {
  const {
    enableLogoutButton = false,
    id,
    logoImageSvg,
    logoImageUrl,
    menuData,
  } = props;
  const trigger = useScrollTrigger();
  const usePathName = usePathname();

  const { user, logOut } = useUserAuth();
  const isAdminUser = user.uid && user.userRole === UserType.ADMIN;
  return (
    <Box sx={{ flexGrow: 1 }} id={id}>
      <Transition.TransitionDown in={!trigger}>
        <AppBar
          color="default"
          enableColorOnDark
          {...(usePathName === `/dashboard/editor/` && {
            position: "relative",
          })}
        >
          <Toolbar>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <DrawerList
                anchor="left"
                menuData={menuData}
                logoImageSvg={logoImageSvg}
                logoImageUrl={logoImageUrl}
              />
            </Box>
            <Box sx={{ pl: 1 }}>
              <NextLink href="/">
                {logoImageUrl ? (
                  <Image src={logoImageUrl} alt="logo" width={50} height={50} />
                ) : (
                  <PurifyText text={logoImageSvg} />
                )}
              </NextLink>
            </Box>
            <Box
              sx={{
                flexGrow: { xs: 1, md: 0 },
              }}
            />
            <Box
              sx={{
                pl: 4,
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                gap: { xs: 0, sm: 1, md: 2 },
              }}
            >
              {menuData?.map((menu, index) => (
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    gap: { xs: 0, sm: 1, md: 2 },
                  }}
                  key={menu?.title || index}
                >
                  {menu?.isAuthenticated ? (
                    <>
                      {isAdminUser ? (
                        <MenuComponent
                          key={menu?.title || index}
                          buttonMenu={true}
                          open
                          buttonProps={{
                            href: menu.path,
                            variant:
                              usePathName === `${menu.path}/`
                                ? "outlined"
                                : "text",
                            endIcon:
                              menu?.submenu?.length > 0 ? "ExpandMore" : "",
                          }}
                          buttonLabel={menu.title}
                          menuItems={menu?.submenu?.map((item) => ({
                            label: item?.title,
                            icon: item?.icon,
                            href: item?.path,
                            selected: usePathName === `${item.path}/`,
                          }))}
                        />
                      ) : null}
                    </>
                  ) : (
                    <MenuComponent
                      key={menu?.title || index}
                      buttonMenu={true}
                      open
                      buttonProps={{
                        href: menu.path,
                        variant:
                          usePathName === `${menu.path}/` ? "outlined" : "text",
                        endIcon: menu?.submenu?.length > 0 ? "ExpandMore" : "",
                      }}
                      buttonLabel={menu.title}
                      menuItems={menu?.submenu?.map((item) => ({
                        label: item?.title,
                        icon: item?.icon,
                        href: item?.path,
                        selected: usePathName === `${item.path}/`,
                      }))}
                    />
                  )}
                </Box>
              ))}
            </Box>
            {enableLogoutButton && (
              <Box sx={{ pr: 1 }}>
                {isAdminUser ? (
                  <ButtonWrapper
                    variant="text"
                    endIcon="Logout"
                    key="logout"
                    onClick={logOut}
                    color="inherit"
                  >
                    logout
                  </ButtonWrapper>
                ) : (
                  <ButtonWrapper
                    href="/signin"
                    variant={usePathName === `/signin/` ? "outlined" : "text"}
                    endIcon="Login"
                    key="Login"
                    color="inherit"
                  >
                    Log in
                  </ButtonWrapper>
                )}
              </Box>
            )}
            <ThemeToggler />
          </Toolbar>
        </AppBar>
      </Transition.TransitionDown>
    </Box>
  );
}
