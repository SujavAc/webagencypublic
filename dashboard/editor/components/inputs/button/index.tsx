import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { DropZone } from "@measured/puck";
import MaterialUIICon from "../../Icon";

interface ButtonWrapperProps extends ButtonProps {
  endIcon: string;
  startIcon: string;
}
export default function ButtonWrapper(props: ButtonWrapperProps) {
  const { endIcon, startIcon, ...rest } = props;
  const newEndIcon = <MaterialUIICon name={endIcon} />;
  const newStartIcon = <MaterialUIICon name={startIcon} />;
  const buttonIcons = { endIcon: newEndIcon, startIcon: newStartIcon };
  return (
    <Button {...rest} {...buttonIcons}>
      <DropZone zone="Button Zone" />
    </Button>
  );
}
