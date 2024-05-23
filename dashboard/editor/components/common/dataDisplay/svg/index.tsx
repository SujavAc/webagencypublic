import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import { SvgIconProps } from "@mui/material/SvgIcon";

interface CustomSvgIconProps extends SvgIconProps {
  svgString?: string;
}

const CommonSvg: React.FC<CustomSvgIconProps> = ({ svgString, ...props }) => {
  return (
    <SvgIcon {...props}>
      {svgString && <g dangerouslySetInnerHTML={{ __html: svgString }} />}
    </SvgIcon>
  );
};

export default CommonSvg;
