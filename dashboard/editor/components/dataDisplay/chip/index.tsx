import * as React from "react";
import Chip, { ChipProps } from "@mui/material/Chip";
import MaterialUIICon from "../../Icon";

export default function Chips(props: ChipProps) {
  const { icon, ...rest } = props;
  const newIcon = <MaterialUIICon name={icon} />;
  return <Chip {...rest} {...{ icon: newIcon }} />;
}
