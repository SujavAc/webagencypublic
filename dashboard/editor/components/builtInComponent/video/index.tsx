"use client";
import { useState } from "react";

import ModalVideo from "react-modal-video";
import { CommonContainerLayout } from "../../common/Layout/Container";
import CommonSvg from "../../common/dataDisplay/svg";
import { CommonBoxContainer } from "../../common/Layout/Box";
import { CommonImageComponent } from "../../common/image";
import CommonButtonWrapper from "../../common/Inputs/Button";
import { VideoType } from "@/types/video";

const Video = (props: VideoType) => {
  const { id, iframeId, channel, preImageUrl, playButtinSVG } = props;
  const [isOpen, setOpen] = useState(false);

  const defaultPlaySvg = `<svg
  viewBox="0 0 16 18"
>
  <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
</svg>`;

  return (
    <CommonContainerLayout
      maxWidth={false}
      disableGutters
      sx={{ maxWidth: 786 }}
      id={id}
    >
      <CommonBoxContainer
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          borderRadius: 2,
          position: "relative",
          height: { xs: 200, sm: 400 },
        }}
      >
        {preImageUrl && (
          <CommonImageComponent src={preImageUrl} alt="video image" fill />
        )}
        <CommonBoxContainer
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
          }}
        >
          <CommonButtonWrapper
            aria-label="video play button"
            onClick={() => setOpen(true)}
            color="primary"
            variant="outlined"
            size="large"
            sx={{
              boxShadow: 24,
              height: 60,
              width: 60,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
            }}
          >
            <CommonSvg
              svgString={playButtinSVG || defaultPlaySvg}
              color="info"
              sx={{ height: 40, width: 40 }}
            />
          </CommonButtonWrapper>
        </CommonBoxContainer>
      </CommonBoxContainer>
      <ModalVideo
        channel={channel}
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId={iframeId}
        onClose={() => setOpen(false)}
      />
    </CommonContainerLayout>
  );
};

export default Video;
