import React, { useContext } from "react";
import { CarouselContext } from "./CarouselContext";
import arrowRight from "../Icons/arrow.svg";

export const ArrowRight = () => {
  const { goRight } = useContext(CarouselContext);

  return (
    <div className="w-1/12 p-4 opacity-40 hover:opacity-100" onClick={goRight}>
      <img src={arrowRight} />
    </div>
  );
};
