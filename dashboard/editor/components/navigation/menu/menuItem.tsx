import * as React from "react";
import MenuItem, { MenuItemProps } from "@mui/material/MenuItem";
import { ListItemIcon } from "@mui/material";
import MaterialUIICon from "../../Icon";
import NextLink from "next/link";

interface MenuItemsProps extends MenuItemProps {
  handleClose: () => void;
  menuItems: Item[];
}

export interface Item {
  icon: string;
  label: string;
  href: string;
}

export default function MenuItems(props: MenuItemsProps) {
  const { handleClose, menuItems, ...rest } = props;

  const handleCloseMenu = () => {
    if (handleClose) {
      handleClose();
    }
  };

  return (
    <React.Fragment>
      {menuItems &&
        menuItems?.map((item, index) =>
          item?.href ? (
            <NextLink
              href={item?.href || ""}
              rel="noopener"
              target="_self"
              key={item?.label || index}
            >
              <MenuItem
                onClick={handleCloseMenu}
                key={item?.label || index}
                {...item}
                {...rest}
              >
                <ListItemIcon>
                  <MaterialUIICon name={item?.icon} />
                </ListItemIcon>
                {item?.label}
              </MenuItem>
            </NextLink>
          ) : (
            <MenuItem
              onClick={handleCloseMenu}
              key={item?.label || index}
              {...item}
              {...rest}
            >
              <NextLink href={item?.href || ""} rel="noopener" target="_self">
                <ListItemIcon>
                  <MaterialUIICon name={item?.icon} />
                </ListItemIcon>
                {item?.label}
              </NextLink>
            </MenuItem>
          )
        )}
    </React.Fragment>
  );
}
