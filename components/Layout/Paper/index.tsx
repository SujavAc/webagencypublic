import * as React from "react";
import Paper, { PaperProps } from "@mui/material/Paper";

export default function PaperWrapper(props: PaperProps) {
  return <Paper elevation={3} {...props} />;
}