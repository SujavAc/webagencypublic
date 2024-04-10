import * as React from "react";
import Paper, { PaperProps } from "@mui/material/Paper";
import { DropZone } from "@measured/puck";

interface PaperWrapperProps extends PaperProps {
  noOfItems: any;
}

export default function PaperWrapper(props: PaperWrapperProps) {
  const { noOfItems, ...rest } = props;
  return (
    <Paper elevation={3} {...rest}>
      {noOfItems &&
        noOfItems?.map((item, index) => (
          <DropZone zone={`Grid item-${index}`} key={`Paper item-${index}`} />
        ))}
    </Paper>
  );
}
