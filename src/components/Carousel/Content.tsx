import React, { useEffect, useState, useContext, HTMLAttributes } from "react";
import type { EpisodeType } from "../../types";
import { useApiGet, TApiResponse } from "../../hooks/useApiHook";
import { CarouselContext } from "./CarouselContext";

type ContentType = {
  episode: EpisodeType;
  onSelect: (episodeData: EpisodeType) => void;
} & HTMLAttributes<HTMLElement>;

export const Content = ({ episode, onSelect }: ContentType) => {
  const [episodeData, setEpisodeData] = useState<any>({} as any);

  const getEpisodeData: TApiResponse = useApiGet(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${episode.imdbID}`
  );

  useEffect(() => {
    if (getEpisodeData) {
      setEpisodeData(getEpisodeData.data as any);
    }
  }, [getEpisodeData]);

  if (!episodeData) {
    return <div></div>;
  }
  const { idx } = useContext(CarouselContext);

  const handleOnclick = () => {
    onSelect?.(episodeData);
  };

  return (
    <div
      className="snap-center min-w-[200px] max-w-[200px] transition duration-150 ease-out ease-in-out cursor-pointer"
      style={{ transform: `translateX(-${idx * 100}%)` }}
      onClick={() => handleOnclick()}
    >
      <div className="transition-300-all shadow-4-hover text-white bg-cover">
        <div
          style={{ backgroundImage: `url(${episodeData.Poster})` }}
          className="h-[134px]"
        ></div>
        <div className="leading-[18px] text-[15px] mt-[19px] mb-[10px]">
          {episodeData.Title}
        </div>
        <div className="leading-[15px] text-[13px] opacity-80">
          {episodeData.Plot}
        </div>
      </div>
    </div>
  );
};
