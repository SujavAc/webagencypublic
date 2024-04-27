import React from "react";
import { SplideSlide } from "@splidejs/react-splide";
import { DropZone } from "@measured/puck";

const SplideItem = () => {
  return (
    <SplideSlide>
      <DropZone zone={`Carousel Container`} />
    </SplideSlide>
  );
};

export default SplideItem;
