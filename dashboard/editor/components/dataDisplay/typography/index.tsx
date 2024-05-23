import * as React from "react";
import Box from "@mui/material/Box";
import { TypographyProps } from "@mui/material/Typography";
import { CommonTypographyComponenet } from "../../common/dataDisplay/Typography";

interface TypographyComponenetProps extends TypographyProps {
  text: string;
}

export default function TypographyComponenet(props: TypographyComponenetProps) {
  const { text, ...rest } = props;
  return (
    <CommonTypographyComponenet {...rest}>{text}</CommonTypographyComponenet>
  );
}
