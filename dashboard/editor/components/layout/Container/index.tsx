import * as React from "react";
import { ContainerProps } from "@mui/material/Container";
import { DropZone } from "@measured/puck";
import { CommonContainerLayout } from "../../common/Layout/Container";

export default function ContainerLayout(props: ContainerProps) {
  return (
    <CommonContainerLayout {...props}>
      <DropZone zone="center" />
    </CommonContainerLayout>
  );
}
