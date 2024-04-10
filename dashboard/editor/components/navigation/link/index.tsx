/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Link, {LinkProps} from '@mui/material/Link';

interface LinksProps extends LinkProps {
  linkLabel: string;
}
export default function Links(props: LinksProps) {
    const { linkLabel, ...rest } = props;
  return (
      <Link {...rest}>{linkLabel || ""}</Link>
  );
}