import * as React from "react";
import Grid, { GridProps } from "@mui/material/Grid";
import { DropZone } from "@measured/puck";

interface GridLayoutProps extends GridProps {
  noOfItems: any;
}

export default function GridItem(props: GridLayoutProps) {
  const { noOfItems } = props;
  return (
    <>
      {noOfItems &&
        noOfItems?.map(({ title, ...rest }, index) => (
          <Grid {...rest} item key={`Grid item-${title || ""}-${index + 1}`}>
            <DropZone zone={`Grid item-${title || ""}-${index + 1}`} />
          </Grid>
        ))}
    </>
  );
}
