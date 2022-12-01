import React, { useContext, useEffect, useState } from "react";
import type { EpisodeType } from "../../types";
import { useApiGet, TApiResponse } from "../../hooks/useApiHook";
import { CarouselContext } from "./CarouselContext";

type ContentType = {
  episode: EpisodeType;
};

export default function Content({ episode }: ContentType) {
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
  return (
    <div className="snap-center min-w-[200px] max-w-[200px]">
      <div className="bg-red-100 p-4 transition-300-all shadow-4-hover">
        {episodeData.Title}
        {episodeData.Plot}
      </div>
    </div>
  );
}
