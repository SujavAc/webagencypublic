import * as React from "react";
import Divider, { DividerProps } from "@mui/material/Divider";
import { DropZone } from "@measured/puck";

export default function DividerComponent(props: DividerProps) {
  return (
    <Divider {...props}>
      <DropZone zone="divider" />
    </Divider>
  );
}
