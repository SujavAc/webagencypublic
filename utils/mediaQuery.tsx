import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";

const useScreenSize = () => {
  const theme = useTheme();
  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    const handleResize = () => {
      // Determine the active screen size based on Material-UI breakpoints
      const { xs, sm, md, lg } = theme.breakpoints.values;
      const width = window.innerWidth;

      if (width < xs) {
        setScreenSize("xs");
      } else if (width < sm) {
        setScreenSize("sm");
      } else if (width < md) {
        setScreenSize("md");
      } else if (width < lg) {
        setScreenSize("lg");
      } else {
        setScreenSize("xl");
      }
    };

    handleResize(); // Call once to set initial size

    window.addEventListener("resize", handleResize); // Listen to window resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup the event listener
    };
  }, [theme.breakpoints.values]);

  return screenSize;
};

export default useScreenSize;
