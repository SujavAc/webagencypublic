import * as React from "react";
import Grid, { GridProps } from "@mui/material/Grid";
import { DropZone } from "@measured/puck";

interface GridLayoutProps extends GridProps {
  noOfItems: any;
}

export default function GridItem(props: GridLayoutProps) {
  const { noOfItems, ...rest } = props;
  return (
    <>
      {noOfItems &&
        noOfItems?.map((item, index) => (
          <Grid {...rest} item key={`Grid item-${index + 1}`}>
            <DropZone zone={`Grid item-${index}`} />
          </Grid>
        ))}
    </>
  );
}
