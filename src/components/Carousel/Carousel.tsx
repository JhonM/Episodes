import React, { useState } from "react";
import Content from "./Content";
import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";
import { CarouselContext } from "./CarouselContext";

const Carousel = (props) => {
  const [idx, setIdx] = useState(0);
  const lastIdx = props.lastIdx;

  const goLeft = () => {
    if (idx === 0) {
      setIdx(lastIdx);
    } else {
      setIdx((prevState) => prevState - 1);
    }
  };
  const goRight = () => {
    if (idx === lastIdx) {
      setIdx(0);
    } else {
      setIdx((prevState) => prevState + 1);
    }
  };
  return (
    <CarouselContext.Provider value={{ idx, goLeft, goRight }}>
      <div>{props.children}</div>
    </CarouselContext.Provider>
  );
};
Carousel.ArrowLeft = ArrowLeft;
Carousel.ArrowRight = ArrowRight;
Carousel.Content = Content;
export default Carousel;
