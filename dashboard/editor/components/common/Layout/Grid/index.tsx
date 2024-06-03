import * as React from "react";
import Grid, { GridProps } from "@mui/material/Grid";

// eslint-disable-next-line react/display-name
export const CommonGridContainer = React.forwardRef<HTMLDivElement, GridProps>(
  (props, ref) => {
    return <Grid {...props} container ref={ref} />;
  }
);
