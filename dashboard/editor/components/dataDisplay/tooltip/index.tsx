import * as React from "react";
import { DropZone } from "@measured/puck";
import Tooltip, { TooltipProps } from "@mui/material/Tooltip";

export default function Tooltips(props: TooltipProps) {
  return (
    <Tooltip {...props}>
      <DropZone zone="tooltip" />
    </Tooltip>
  );
}
