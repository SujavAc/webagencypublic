import React from "react";
import { IconProps } from "@mui/material/Icon";
import * as Icons from "@mui/icons-material";

export interface MaterialUIIConProps extends IconProps {
  name: string;
}

const MaterialUIICon = (props: MaterialUIIConProps) => {
  const { name, ...rest } = props;
  const IconComponent = Icons[name];
  if (!IconComponent) return null; // Return null if the icon name is not found

  return <IconComponent {...rest} />;
};

export default MaterialUIICon;
