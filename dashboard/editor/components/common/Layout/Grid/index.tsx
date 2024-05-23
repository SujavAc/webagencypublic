import * as React from "react";
import Grid, { GridProps } from "@mui/material/Grid";

export const CommonGridContainer = (props: GridProps) => {
  return <Grid {...props} container />;
};
