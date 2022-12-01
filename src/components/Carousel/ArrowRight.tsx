import React, { useContext } from "react";
import { CarouselContext } from "./CarouselContext";

export const ArrowRight = (props) => {
  const { goRight } = useContext(CarouselContext);

  return (
    <div className="w-1/12 lg:p-5" onClick={goRight}>
      <img src="/right.png" />
    </div>
  );
};
