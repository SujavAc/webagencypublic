"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitleComponent from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";
import { Video } from "@/types/video";
import PurifyText from "../Common/PurifyText";

const Video = (props: Video) => {
  const { iframeId, channel, preImageUrl, playButtinSVG } = props;
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitleComponent
          title="We are ready to help"
          paragraph="At our web development agency, we're committed to turning your digital aspirations into reality. Our skilled team of developers and designers is ready to create visually stunning, responsive websites tailored to your needs. Whether you're starting fresh or upgrading an existing site, we specialize in e-commerce integration and cutting-edge technologies. Partner with us to build a compelling online presence that propels your business forward. Your success is our priority, and we're here every step of the way to make it happen."
          width="100%"
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src={preImageUrl} alt="video image" fill />
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  <button
                    aria-label="video play button"
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <PurifyText text={playButtinSVG} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel={channel}
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId={iframeId}
        onClose={() => setOpen(false)}
      />

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
