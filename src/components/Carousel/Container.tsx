import React, { useEffect, useContext, useRef } from "react";
import { CarouselContext } from "./CarouselContext";

export const Container = (props: { children: React.ReactNode }) => {
  const { idx } = useContext(CarouselContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const element = ref.current;
      element.scrollTo({ left: idx * 160, behavior: "smooth" });
    }
  }, [ref.current, idx]);

  return (
    <div className="w-full overflow-x-auto no-scrollbar">
      <div
        ref={ref}
        className="flex pl-16 overflow-x-scroll justify-start space-x-12 no-scrollbar overflow-y-hidden snap-x"
      >
        {props.children}
      </div>
    </div>
  );
};
