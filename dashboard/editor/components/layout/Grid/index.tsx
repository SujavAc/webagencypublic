import * as React from "react";
import Grid, { GridProps } from "@mui/material/Grid";
import { DropZone } from "@measured/puck";

export default function GridContainer(props: GridProps) {
  return (
    <Grid container {...props}>
      <DropZone zone={`Grid container`} />
    </Grid>
  );
}
