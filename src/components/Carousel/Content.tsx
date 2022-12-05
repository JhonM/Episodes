import React, { useEffect, useState, useContext, HTMLAttributes } from "react";
import classnames from "classnames";
import type { EpisodeType } from "../../types";
import { useApiGet, TApiResponse } from "../../hooks/useApiHook";
import { CarouselContext } from "./CarouselContext";

type ContentType = {
  episode: EpisodeType;
  onSelect: (episodeData: EpisodeType) => void;
  isSelected: boolean;
} & HTMLAttributes<HTMLElement>;

export const Content = ({ episode, onSelect, isSelected }: ContentType) => {
  const { show } = useContext(CarouselContext);
  const [episodeData, setEpisodeData] = useState<EpisodeType>(
    {} as EpisodeType
  );
  const getEpisodeData: TApiResponse = useApiGet(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${episode.imdbID}`
  );

  useEffect(() => {
    if (getEpisodeData) {
      setEpisodeData(getEpisodeData.data as EpisodeType);
    }
  }, [getEpisodeData]);

  if (!episodeData) {
    return <div></div>;
  }

  const handleOnclick = () => {
    onSelect?.(episodeData);
  };

  return (
    <div
      className={classnames(
        "transition duration-150 ease-in-out cursor-pointer shrink-0 grow min-w-[200px] max-w-[200px]",
        { "w-3/4 md:w-1/3 lg:w-1/3": show === 3 },
        { "w-2/4 md:w-1/4 lg:w-1/4": show === 4 }
      )}
      onClick={() => handleOnclick()}
    >
      <div className="transition-300-all shadow-4-hover text-white bg-cover">
        <div
          style={{ backgroundImage: `url(${episodeData.Poster})` }}
          className={classnames(
            "h-[134px] bg-cover bg-slate-800 hover:bg-blend-normal",
            { "bg-blend-normal": isSelected },
            { "bg-blend-difference": !isSelected }
          )}
        ></div>
        <div className="leading-[18px] text-[15px] mt-[19px] mb-[10px] font-HelveticaNeueLTStd-Md">
          {episodeData.Title}
        </div>
        <div className="leading-[15px] text-[13px] opacity-80 line-clamp-3">
          {episodeData.Plot}
        </div>
      </div>
    </div>
  );
};
