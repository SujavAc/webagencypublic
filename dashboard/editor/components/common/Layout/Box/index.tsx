import * as React from "react";
import Box, { BoxProps } from "@mui/material/Box";

export const CommonBoxContainer = (props: BoxProps) => {
  return <Box component="div" {...props} />;
};
