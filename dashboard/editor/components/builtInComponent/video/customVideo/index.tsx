"use client";
import { DropZone } from "@measured/puck";
import React, { useRef } from "react";
import { CommonBoxContainer } from "../../../common/Layout/Box";

const VideoPlayer = ({ id, ...rest }) => {
  const videoRef = useRef(null);

  return (
    <CommonBoxContainer
      sx={{ position: "relative", overflow: "hidden" }}
      id={id}
    >
      <video ref={videoRef} style={{ width: "100%" }} {...rest} />
      <CommonBoxContainer sx={{ width: "100%" }}>
        {!rest?.controls && (
          <CommonBoxContainer
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 1,
              backdropFilter: "blur(10px)",
              backgroundColor: "Background",
            }}
          >
            <DropZone zone="Video drop Zone" />
          </CommonBoxContainer>
        )}
      </CommonBoxContainer>
    </CommonBoxContainer>
  );
};

export default VideoPlayer;
