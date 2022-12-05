import React from "react";
import type { EpisodesType, EpisodeType } from "../../types";
import Carousel from "../Carousel/Carousel";

type EpisodesCarouselType = {
  data: EpisodesType["Episodes"];
  currentEpisode: EpisodeType;
  setCurrentEpisode: (episode: EpisodeType) => void;
};

export const EpisodesCarousel = ({
  data,
  currentEpisode,
  setCurrentEpisode,
}: EpisodesCarouselType) => {
  if (data == undefined) {
    return <div></div>;
  }

  return (
    <Carousel lastIdx={data.length - 1} show={4}>
      <Carousel.Container>
        {data.map((episode) => (
          <Carousel.Content
            key={episode.imdbID}
            episode={episode}
            onSelect={(episodeData) =>
              setCurrentEpisode(episodeData as EpisodeType)
            }
            isSelected={currentEpisode.imdbID === episode.imdbID}
          />
        ))}
      </Carousel.Container>

      <div className="flex justify-end mt-4">
        <Carousel.ArrowLeft />
        <Carousel.ArrowRight />
      </div>
    </Carousel>
  );
  //
};
