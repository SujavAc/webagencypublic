import * as React from "react";
import Masonry, { MasonryProps } from "@mui/lab/Masonry";

interface IMasinryGrid extends MasonryProps {
  children: React.ReactElement[];
}
export default function MasonryGrid(props: IMasinryGrid) {
  const { children, ...rest } = props;
  return (
    <Masonry columns={3} spacing={{ xs: 1, sm: 2, md: 3 }} {...rest}>
      {children}
    </Masonry>
  );
}
