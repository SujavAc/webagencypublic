import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import NextLink from "next/link";
import MaterialUIICon from "../../../Icon";
import { IconButton } from "@mui/material";

export interface ButtonWrapperProps extends ButtonProps {
  endIcon?: string;
  startIcon?: string;
  iconButton?: boolean;
}
export default function ButtonWrapper(props: ButtonWrapperProps) {
  const { iconButton, endIcon, startIcon, href, ...rest } = props;
  const newEndIcon = endIcon ? <MaterialUIICon name={endIcon} /> : null;
  const newStartIcon = startIcon ? <MaterialUIICon name={startIcon} /> : null;
  if (href) {
    return (
      <NextLink href={href} rel="noopener" tabIndex={-1}>
        {iconButton ? (
          <IconButton {...rest}>{newEndIcon || newStartIcon}</IconButton>
        ) : (
          <Button
            {...rest}
            startIcon={newStartIcon}
            endIcon={newEndIcon}
          ></Button>
        )}
      </NextLink>
    );
  }
  return (
    <>
      {iconButton ? (
        <IconButton {...rest}>{newEndIcon || newStartIcon}</IconButton>
      ) : (
        <Button
          {...rest}
          startIcon={newStartIcon}
          endIcon={newEndIcon}
        ></Button>
      )}
    </>
  );
}
