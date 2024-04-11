import * as React from "react";
import Chip, { ChipProps } from "@mui/material/Chip";
import MaterialUIICon from "../../Icon";

interface IChipProps extends ChipProps {
  iconName: string;
}

export default function Chips(props: IChipProps) {
  const { iconName, ...rest } = props;
  const newIcon = <MaterialUIICon name={iconName} />;
  return <Chip {...rest} {...{ icon: newIcon }} />;
}
