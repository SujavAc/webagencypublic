import * as React from "react";
import { BoxProps } from "@mui/material/Box";
import { DropZone } from "@measured/puck";
import { CommonBoxContainer } from "../../common/Layout/Box";

export default function BoxContainer(props: BoxProps) {
  return (
    <CommonBoxContainer component="div" {...props}>
      <DropZone zone="Box Zone" />
    </CommonBoxContainer>
  );
}
