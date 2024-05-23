import * as React from "react";
import Grid, { GridProps } from "@mui/material/Grid";

export const CommonGridItem = (props: GridProps) => {
  return <Grid {...props} item />;
};
