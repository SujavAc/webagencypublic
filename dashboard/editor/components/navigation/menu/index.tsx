import * as React from "react";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItems, { Item } from "./menuItem";

interface MenuComponentProps extends MenuProps {
  buttonMenu: boolean;
  buttonLabel: string;
  menuOpenBydefault: boolean;
  menuItems: Item[];
}

export default function MenuComponent(props: MenuComponentProps) {
  const { buttonMenu, buttonLabel, menuItems, ...rest } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {buttonMenu && (
        <Button
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {buttonLabel || ""}
        </Button>
      )}

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        {...rest}
      >
        <MenuItems handleClose={handleClose} menuItems={menuItems} />
      </Menu>
    </div>
  );
}
