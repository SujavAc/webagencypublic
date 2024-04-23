import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { DropZone } from "@measured/puck";
import MaterialUIICon from "../../Icon";
import NextLink from "next/link";

interface ButtonWrapperProps extends ButtonProps {
  endIcon: string;
  startIcon: string;
}
export default function ButtonWrapper(props: ButtonWrapperProps) {
  const { endIcon, startIcon, href, ...rest } = props;
  const newEndIcon = <MaterialUIICon name={endIcon} />;
  const newStartIcon = <MaterialUIICon name={startIcon} />;
  const buttonIcons = { endIcon: newEndIcon, startIcon: newStartIcon };
  if (href) {
    return (
      <NextLink href={href} rel="noopener" tabIndex={-1}>
        <Button {...rest} {...buttonIcons}>
          <DropZone zone="Button Zone" />
        </Button>
      </NextLink>
    );
  }
  return (
    <Button {...rest} {...buttonIcons}>
      <DropZone zone="Button Zone" />
    </Button>
  );
}
