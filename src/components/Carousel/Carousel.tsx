import React, { useState } from "react";
import { Content } from "./Content";
import { Container } from "./Container";
import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";
import { CarouselContext } from "./CarouselContext";

type CarouselType = {
  children: React.ReactNode;
  lastIdx: number;
  show?: 3 | 4;
};

const Carousel = ({ children, lastIdx, show = 3 }: CarouselType) => {
  const [idx, setIdx] = useState(0);
  const [length, setLength] = useState(React.Children.count(children));
  React.useEffect(() => {
    setLength(React.Children.count(children));
  }, [children]);

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
    <CarouselContext.Provider value={{ idx, goLeft, goRight, show }}>
      <>{children}</>
    </CarouselContext.Provider>
  );
};

Carousel.ArrowLeft = ArrowLeft;
Carousel.ArrowRight = ArrowRight;
Carousel.Content = Content;
Carousel.Container = Container;
export default Carousel;
