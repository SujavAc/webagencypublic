"use client";
import React, { useRef } from "react";

const VideoPlayer = ({ src, poster }) => {
  const videoRef = useRef(null);

  const playPauseToggle = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const skip = (value) => {
    videoRef.current.currentTime += value;
  };

  const handleVolumeChange = (e) => {
    videoRef.current.volume = e.target.value;
  };

  const handleProgressChange = () => {
    const progressBar = document.getElementById("progress-bar");
    const value =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;
    progressBar.style.width = `${value}%`;
  };

  const scrub = (e) => {
    const scrubTime =
      (e.nativeEvent.offsetX / videoRef.current.offsetWidth) *
      videoRef.current.duration;
    videoRef.current.currentTime = scrubTime;
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full"
        controls
        onTimeUpdate={handleProgressChange}
      />
      <div className="absolute bottom-0 w-full bg-gray-900 bg-opacity-50 py-2">
        <div className="flex items-center justify-between px-4">
          <button onClick={playPauseToggle}>
            {videoRef.current && videoRef.current.paused ? "Play" : "Pause"}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            defaultValue="1"
            onChange={handleVolumeChange}
          />
          <button onClick={() => skip(-10)}>Rewind 10s</button>
          <button onClick={() => skip(10)}>Forward 10s</button>
          <div className="relative w-3/4" onClick={scrub}>
            <div
              id="progress-bar"
              className="absolute left-0 top-0 h-1 bg-white"
            ></div>
          </div>
          <span>
            {videoRef.current ? Math.floor(videoRef.current.currentTime) : "0"}s
          </span>
          <span>
            {videoRef.current ? Math.floor(videoRef.current.duration) : "0"}s
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
