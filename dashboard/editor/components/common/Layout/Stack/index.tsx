import * as React from "react";
import { Stack, StackProps } from "@mui/material";

interface StackLayoutProps {
  id?: string;
  noOfItems?: any;
  stackProps?: StackProps;
}

export default function StackLayout(props: StackLayoutProps) {
  const { id, noOfItems, stackProps, ...rest } = props;
  return (
    <div id={id}>
      <Stack {...rest}>{noOfItems && noOfItems?.map((item) => item)}</Stack>
    </div>
  );
}
