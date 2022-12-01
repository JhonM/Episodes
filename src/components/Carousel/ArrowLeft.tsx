import React, { useContext } from "react";
import { CarouselContext } from "./CarouselContext";
import arrowLeft from "../Icons/arrow.svg";

export const ArrowLeft = () => {
  const { goLeft } = useContext(CarouselContext);

  return (
    <div
      className="w-1/12 lg:p-5 rotate-180 opacity-40 hover:opacity-100"
      onClick={goLeft}
    >
      <img src={arrowLeft} />
    </div>
  );
};
