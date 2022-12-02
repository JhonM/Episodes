import React, { useEffect, useState } from "react";
import type { MovieType, EpisodesType, EpisodeType } from "./types";
import "./app.css";
import { useApiGet, TApiResponse } from "./hooks/useApiHook";
import { EpisodesCarousel } from "./components/EpisodesCarousel";
import star from "./components/Icons/star.svg";

const serieId = "tt6487482";

export const App = () => {
  const [serieData, setSerieData] = useState<MovieType>({} as MovieType);
  const [episodesData, setEpisodesData] = useState<EpisodesType>(
    {} as EpisodesType
  );
  const [currentEpisode, setCurrentEpisode] = useState<EpisodeType>(
    {} as EpisodeType
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

  useEffect(() => {
    if (Object.keys(currentEpisode).length === 0 && episodesData) {
      if (Object.keys(episodesData).length) {
        const [initialEpisode] = episodesData.Episodes;
        if (initialEpisode) {
          setCurrentEpisode(initialEpisode);
        }
      }
    }
  }, [currentEpisode, episodesData]);

  if (!serieData || !episodesData) {
    return <div></div>;
  }

  const { Title, Plot, Ratings } = serieData;
  const capitalized = (w: string) => {
    const split = w.split("/");
    return (
      <span key={w}>
        <span className="font-bold">{split[0]}</span>/{split[1]}
      </span>
    );
  };

  return (
    <div className="container mx-auto">
      <div className="h-[1372px] lg:h-[812px] w-full flex flex-col lg:flex-row">
        <div
          className="flex-1 basis-6/12 lg:basis-8/12 bg-cover flex-col lg:flex-row h-full w-full bg-blend-color-normal flex relative"
          style={{ backgroundImage: `url(${serieData.Poster})` }}
        >
          <div className="absolute inset h-full w-full bg-gradient-to-t from-black">
            <div className="relative h-full">
              <div className="pl-20 pt-[8%] text-white z-10 max-w-md h-auto space-y-68 h-3/5">
                <div className="">
                  <div className="leading-7 text-[23px]">Season</div>
                  <div className="leading-[87px] text-[74px]">{Title}</div>
                  <div className="leading-7 text-[23px]">{Plot}</div>
                </div>
              </div>
              <div className="overflow-hidden display-grid lg:max-w-584 mb-4 h-2/5">
                <EpisodesCarousel
                  data={episodesData.Episodes}
                  currentEpisode={(episode) => setCurrentEpisode(episode)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 basis-4/12 flex flex-col">
          <div
            className="h-3/5 bg-cover hidden lg:block"
            style={{ backgroundImage: `url(${currentEpisode.Poster})` }}
          ></div>
          <div className="h-2/5">
            <div className="h-2/5 flex px-8 items-center justify-between">
              <div className="leading-5">
                Episode {currentEpisode.Episode} - {currentEpisode.Released}
              </div>
              <div className="flex justify-between items-center space-x-3">
                <div>
                  <img src={star} />
                </div>
                <div>
                  {Ratings && Ratings.map(({ Value }) => capitalized(Value))}
                </div>
              </div>
            </div>
            <hr className="border-b-1 border-[#979797] opacity-20" />
            <div className="h-3/5 p-8 flex flex-col text-left">
              <div className="text-[27px] leading-8 mb-2">
                {currentEpisode.Title}
              </div>
              <div className="text-[19px] leading-[22px]">
                {currentEpisode.Plot}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
