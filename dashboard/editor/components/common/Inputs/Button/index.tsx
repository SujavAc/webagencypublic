import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import NextLink from "next/link";
import MaterialUIICon from "../../../Icon";

interface ButtonWrapperProps extends ButtonProps {
  endIcon?: string;
  startIcon?: string;
}
export default function ButtonWrapper(props: ButtonWrapperProps) {
  const { endIcon, startIcon, href, ...rest } = props;
  const newEndIcon = <MaterialUIICon name={endIcon} />;
  const newStartIcon = <MaterialUIICon name={startIcon} />;
  if (href) {
    return (
      <NextLink href={href} rel="noopener" tabIndex={-1}>
        <Button
          {...rest}
          startIcon={newStartIcon}
          endIcon={newEndIcon}
        ></Button>
      </NextLink>
    );
  }
  return (
    <Button {...rest} startIcon={newStartIcon} endIcon={newEndIcon}></Button>
  );
}
