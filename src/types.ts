export type MovieType = {
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: [];
};

type EpisodeShortType = {
  Episode: string;
  Released: string;
  Title: string;
  imdbID: string;
  imdbRating: string;
};

type EpisodeLongType = {
  Actors: string;
  Awards: string;
  Country: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Rated: string;
  Ratings: [];
  Response: string;
  Runtime: string;
  Season: string;
  Type: string;
  Writer: string;
  Year: string;
  idbRating: string;
  imdbVotes: string;
  seriesID: string;
};

export type EpisodeType = EpisodeLongType & EpisodeShortType;

export type EpisodesType = {
  Episodes: EpisodeType[];
  Response: string;
  Season: string;
  Title: string;
  totalSeasons: string;
};
