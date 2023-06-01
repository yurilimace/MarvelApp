export type MarvelApiResponse = {
  code: number;
  status: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Character[];
  };
};

export type MarvelComicsResponse = {
  code: number;
  status: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Comic[];
  };
};

type Comic = {
  id: number;
  title: string;
  description: string;
  thumbnail: Thumbnail;
  dates: ComicReleaseDate[];
};

type ComicReleaseDate = {
  type: "onSaleDate" | "focDate" | "unlimitedDate" | "digitalPurchaseDate";
  date: string;
};

type Character = {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
};

type Thumbnail = {
  path: string;
  extension: string;
};

export type CharacterFormated = {
  id: number;
  image: string;
  name: string;
};

export type CharacterDetailFormated = {
  name: string;
  id: number;
  description: string;
  image: string;
  stories: ComicFormated[];
};

export type ComicFormated = {
  title: string;
  image: string;
  lastReleaseDate: string;
};
