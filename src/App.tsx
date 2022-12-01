import React, { useEffect, useState } from "react";
import * as dotenv from "dotenv";
import type { MovieType, EpisodesType } from "./types";
import "./app.css";
import { useApiGet, TApiResponse } from "./hooks/useApiHook";
import { EpisodesCarousel } from "./components/EpisodesCarousel";

dotenv.config();

const serieId = "tt6487482";

export const App = () => {
  const [serieData, setSerieData] = useState<MovieType>({} as MovieType);
  const [episodesData, setEpisodesData] = useState<EpisodesType>(
    {} as EpisodesType
  );

  const getSerieData: TApiResponse = useApiGet(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${serieId}`
  );

  const getEpisodesData: TApiResponse = useApiGet(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${serieId}&Season=1`
  );

  useEffect(() => {
    if (getSerieData) {
      setSerieData(getSerieData.data as MovieType);
    }
  }, [getSerieData]);

  useEffect(() => {
    if (getEpisodesData) {
      setEpisodesData(getEpisodesData.data as EpisodesType);
    }
  }, [getEpisodesData]);

  if (!serieData || !episodesData) {
    return <div></div>;
  }

  const { Title, Plot } = serieData;

  return (
    <div className="container mx-auto">
      <div className="h-[812px] w-full flex">
        <div className="flex-1 basis-8/12 bg-cover h-full w-full bg-blend-color-normal flex relative">
          <div className="absolute inset h-full w-full bg-gradient-to-t from-black">
            <div className="relative top-1/4 space-y-32">
              <div className="pl-20 text-white z-10 max-w-md h-auto space-y-2">
                <div>Season</div>
                <div>{Title}</div>
                <div>{Plot}</div>
              </div>
              <div className="overflow-hidden display-grid lg:max-w-584 mb-4">
                <EpisodesCarousel data={episodesData.Episodes} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 basis-4/12">Skinny Is Magic</div>
      </div>
    </div>
  );
};
