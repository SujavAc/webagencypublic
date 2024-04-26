import * as React from "react";
import Grid, { GridProps } from "@mui/material/Grid";
import { DropZone } from "@measured/puck";

export default function GridItem(props: GridProps) {
  return (
    <Grid {...props} item key="Grid Item">
      <DropZone zone="Grid Item" />
    </Grid>
  );
}
