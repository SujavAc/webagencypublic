import * as React from "react";
import Container, { ContainerProps } from "@mui/material/Container";
import { DropZone } from "@measured/puck";

export default function ContainerLayout(props: ContainerProps) {
  return (
    <Container {...props}>
      <DropZone zone="center" />
    </Container>
  );
}
