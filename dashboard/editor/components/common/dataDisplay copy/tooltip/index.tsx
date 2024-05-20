import * as React from "react";
import Tooltip, { TooltipProps } from "@mui/material/Tooltip";

export default function CommonTooltip(props: TooltipProps) {
  const { children, ...rest } = props;
  return (
    <Tooltip arrow {...rest}>
      {children}
    </Tooltip>
  );
}
