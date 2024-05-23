/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import NextLink, { LinkProps } from "next/link";
import { Link as MUILink, LinkProps as MUILinkProps } from "@mui/material";

export interface LinksProps extends MUILinkProps {
  nextLinkProps?: LinkProps;
}
export default function CommonLink(props: LinksProps) {
  const { nextLinkProps, href, ...rest } = props;
  return (
    <NextLink
      href={href || ""}
      rel="noopener"
      target={rest?.target}
      {...nextLinkProps}
    >
      <MUILink component="span" {...rest} />
    </NextLink>
  );
}
