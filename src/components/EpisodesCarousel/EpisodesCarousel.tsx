import React from "react";
import type { EpisodesType, EpisodeType } from "../../types";
import Carousel from "../Carousel/Carousel";

type EpisodesCarouselType = {
  data: EpisodesType["Episodes"];
  currentEpisode: (episode: EpisodeType) => void;
};

export const EpisodesCarousel = ({
  data,
  currentEpisode,
}: EpisodesCarouselType) => {
  if (data == undefined) {
    return <div></div>;
  }

  return (
    <Carousel lastIdx={data.length - 1}>
      <Carousel.Container>
        {data.map((episode) => (
          <Carousel.Content
            key={episode.imdbID}
            episode={episode}
            onSelect={(episodeData) =>
              currentEpisode(episodeData as EpisodeType)
            }
          />
        ))}
      </Carousel.Container>

      <div className="flex justify-end">
        <Carousel.ArrowLeft />
        <Carousel.ArrowRight />
      </div>
    </Carousel>
  );
  //
};
