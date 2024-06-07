import * as React from "react";
import Menu, { MenuProps } from "@mui/material/Menu";
import { MenuItemProps } from "@mui/material/MenuItem";
import MenuItems, { Item } from "./menuItem";
import ButtonWrapper, { ButtonWrapperProps } from "../../common/Inputs/Button";

interface MenuComponentProps extends MenuProps {
  buttonMenu: boolean;
  buttonProps: ButtonWrapperProps;
  buttonLabel?: string;
  menuItems: Item[];
  menuItemsProps?: MenuItemProps;
}

export default function MenuComponent(props: MenuComponentProps) {
  const {
    buttonMenu,
    buttonProps,
    buttonLabel,
    menuItems,
    menuItemsProps,
    ...rest
  } = props;
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
        <ButtonWrapper
          id={`${buttonLabel}-button`}
          aria-controls={open ? `${buttonLabel}-menu` : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          {...buttonProps}
        >
          {buttonLabel || ""}
        </ButtonWrapper>
      )}
      {menuItems && menuItems?.length > 0 && (
        <Menu
          id={`${buttonLabel}-button`}
          aria-labelledby={`${buttonLabel}-button`}
          anchorEl={anchorEl}
          onClose={handleClose}
          {...rest}
          open={open}
        >
          <MenuItems
            handleClose={handleClose}
            menuItems={menuItems}
            {...menuItemsProps}
          />
        </Menu>
      )}
    </div>
  );
}
