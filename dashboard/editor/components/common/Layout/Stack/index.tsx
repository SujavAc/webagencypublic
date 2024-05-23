import * as React from "react";
import { Stack, StackProps } from "@mui/material";

interface StackLayoutProps {
  id?: string;
  noOfItems?: any;
  stackProps?: StackProps;
}

export default function CommonStackLayout(props: StackLayoutProps) {
  const { id, noOfItems, stackProps } = props;
  return (
    <div id={id}>
      <Stack {...stackProps}>
        {noOfItems && noOfItems?.map((item) => item)}
      </Stack>
    </div>
  );
}
