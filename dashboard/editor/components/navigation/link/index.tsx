/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { DropZone } from "@measured/puck";
import NextLink from "next/link";
import { Link as MUILink, LinkProps as MUILinkProps } from "@mui/material";

export interface LinksProps extends MUILinkProps {
  linkLabel: string;
}
export default function Links(props: LinksProps) {
  const { linkLabel, href, ...rest } = props;
  return (
    <NextLink
      href={props?.editMode ? "#" : href || ""}
      rel="noopener"
      target={rest?.target}
      className={rest?.className}
    >
      <MUILink {...rest} component="span">
        {linkLabel ? linkLabel : <DropZone zone="Link Zone" />}
      </MUILink>
    </NextLink>
  );
}
