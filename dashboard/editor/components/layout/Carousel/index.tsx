import React from "react";
import { Splide, SplideProps } from "@splidejs/react-splide";
import { DropZone } from "@measured/puck";
import "@splidejs/react-splide/css";

const Carousel = (props: SplideProps) => {
  return (
    <Splide {...props}>
      <DropZone zone={`Carousel Container`} />
    </Splide>
  );
};

export default Carousel;
