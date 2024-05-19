import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { DropZone } from "@measured/puck";
import MaterialUIICon from "../../Icon";
import NextLink from "next/link";
import { IconButton } from "@mui/material";

export interface ButtonWrapperProps extends ButtonProps {
  endIcon?: string;
  startIcon?: string;
  iconButton?: boolean;
}
export default function ButtonWrapper(props: ButtonWrapperProps) {
  const { endIcon, startIcon, iconButton, href, ...rest } = props;
  const IconButtonProps = {
    color: rest?.color,
    size: rest?.size,
    disabled: rest?.disabled,
    sx: rest?.sx,
    onClick: rest?.onClick,
  };
  const newEndIcon = <MaterialUIICon name={endIcon} />;
  const newStartIcon = <MaterialUIICon name={startIcon} />;
  const buttonIcons = { endIcon: newEndIcon, startIcon: newStartIcon };

  if (href) {
    return (
      <NextLink href={href} rel="noopener" tabIndex={-1}>
        {iconButton ? (
          <IconButton {...IconButtonProps}>
            <DropZone zone="Icon Button Zone" style={{ width: "100px" }} />
          </IconButton>
        ) : (
          <Button {...rest} {...buttonIcons}>
            <DropZone zone="Button Zone" style={{ width: "100px" }} />
          </Button>
        )}
      </NextLink>
    );
  }
  return (
    <>
      {iconButton ? (
        <IconButton {...IconButtonProps}>
          <DropZone zone="Icon Button Zone" style={{ width: "100px" }} />
        </IconButton>
      ) : (
        <Button {...rest} {...buttonIcons}>
          <DropZone zone="Button Zone" style={{ width: "100px" }} />
        </Button>
      )}
    </>
  );
}
