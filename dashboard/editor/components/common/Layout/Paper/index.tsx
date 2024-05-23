import * as React from "react";
import Paper, { PaperProps } from "@mui/material/Paper";

export default function CommonPaperWrapper(props: PaperProps) {
  return (
    <Paper
      elevation={props?.variant === "outlined" ? 0 : 3}
      sx={{ p: 2 }}
      {...props}
    />
  );
}
