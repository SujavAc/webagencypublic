import * as React from "react";
import Grid, { GridProps } from "@mui/material/Grid";
import { DropZone } from "@measured/puck";

export default function GridContainer(props: GridProps) {
  return (
    <Grid {...props} container>
      <DropZone zone={`Grid container`} />
    </Grid>
  );
}
