import * as React from "react";
import Box from "@mui/material/Box";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import ButtonWrapper from "../../Inputs/Button";
import NestedList from "../list";
import Link from "next/link";
import Image from "next/image";
import { Divider } from "@mui/material";
import { Menu } from "@/types/menu";
import PurifyText from "../../PurifyText";

interface IDrawerListProps extends DrawerProps {
  title?: string;
  menuData: Menu[];
  logoImageUrl?: string;
  logoImageSvg?: string;
}
export default function DrawerList(props: IDrawerListProps) {
  const { title, anchor, menuData, logoImageSvg, logoImageUrl, ...rest } =
    props;
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpenDrawer(open);
    };

  const list = () => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        height: 300,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      role="presentation"
      //   onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ p: 1 }}>
        <Link href="/">
          {logoImageUrl ? (
            <Image src={logoImageUrl} alt="logo" width={50} height={50} />
          ) : (
            <PurifyText text={logoImageSvg} />
          )}
        </Link>
      </Box>
      <Divider />
      <NestedList items={menuData} heading={title} />
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <ButtonWrapper
          onClick={() => setOpenDrawer(true)}
          iconButton
          startIcon="Menu"
          color="primary"
        >
          Open Drawer
        </ButtonWrapper>
        <Drawer
          anchor={anchor}
          open={openDrawer}
          onClose={toggleDrawer(false)}
          {...rest}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
