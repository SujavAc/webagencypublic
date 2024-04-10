import * as React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import { DropZone } from "@measured/puck";

export default function BoxContainer(props: BoxProps) {
  return (
    <Box component="div" {...props}>
      <DropZone zone="Box Zone" />
    </Box>
  );
}
