"use client";
import { DropZone } from "@measured/puck";
import React, { useRef } from "react";

const VideoPlayer = ({ id, ...rest }) => {
  const videoRef = useRef(null);

  return (
    <div className="relative overflow-hidden" id={id}>
      <video ref={videoRef} className={`w-full`} {...rest} />
      <div className={`w-full`}>
        {!rest?.controls && (
          <div
            className={`absolute top-0 flex h-full w-full items-center justify-center px-4 py-4 backdrop-blur-sm`}
          >
            <DropZone zone="Video drop Zone" />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
