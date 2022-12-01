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
};

export type EpisodeType = {
  Episode: string;
  Released: string;
  Title: string;
  imdbID: string;
  imdbRating: string;
};

export type EpisodesType = {
  Episodes: EpisodeType[];
  Response: string;
  Season: string;
  Title: string;
  totalSeasons: string;
};
