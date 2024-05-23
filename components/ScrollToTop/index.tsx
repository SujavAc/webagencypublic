"use client";
import React from "react";
import { Box, Fab, Fade } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import MaterialUIICon from "@/dashboard/editor/components/Icon";

interface Props {
  children?: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    target: window ? window : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    return window?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function ScrollToTop(props: Props) {
  return (
    <React.Fragment>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <MaterialUIICon name="KeyboardArrowUp" color="primary" />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
