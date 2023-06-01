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
