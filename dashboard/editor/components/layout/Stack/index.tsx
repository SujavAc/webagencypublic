import * as React from "react";
import { Stack, StackProps } from "@mui/material";
import { DropZone } from "@measured/puck";

export default function StackLayout(props: StackProps) {
  return (
    <Stack {...props}>
      <DropZone zone="stack item" />
    </Stack>
  );
}
