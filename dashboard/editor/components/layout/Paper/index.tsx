import * as React from "react";
import Paper, { PaperProps } from "@mui/material/Paper";
import { DropZone } from "@measured/puck";

export default function PaperWrapper(props: PaperProps) {
  return (
    <Paper elevation={3} {...props}>
      <DropZone zone="paper item" />
    </Paper>
  );
}
