import React from "react";
import type { EpisodesType } from "../../types";
import Carousel from "../Carousel/Carousel";

type EpisodesCarouselType = {
  data: EpisodesType["Episodes"];
};

export const EpisodesCarousel = ({ data }: EpisodesCarouselType) => {
  if (data == undefined) {
    return <div></div>;
  }

  return (
    <Carousel lastIdx={data.length - 1}>
      <div className="pl-16 flex overflow-x-auto justify-start space-x-12 no-scrollbar overflow-y-hidden snap-x">
        {data.map((episode) => (
          <Carousel.Content key={episode.imdbID} episode={episode} />
        ))}
      </div>

      <div className="flex justify-end">
        <Carousel.ArrowLeft />
        <Carousel.ArrowRight />
      </div>
    </Carousel>
  );
  //
};
