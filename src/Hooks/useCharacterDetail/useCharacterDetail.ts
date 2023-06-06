import md5 from "md5";

import { useParams } from "react-router-dom";
import { BaseAPI } from "../../services";
import { useQuery } from "react-query";
import {
  ComicFormated,
  MarvelApiResponse,
  MarvelComicsResponse,
} from "../../types";

export const useCharacterDetail = () => {
  const publicKey = "752394fc40641a008eaf8f55fe23ecca";
  const privateKey = "06df6464521748172dcd5997dfe1e898f75f91e0";
  const timeStamp = Number(new Date());

  const hash = md5(timeStamp + privateKey + publicKey);

  const routeParams = useParams();

  const params = {
    ts: timeStamp,
    apikey: publicKey,
    hash: hash,
  };

  const GetCharacter = async () => {
    const {
      data: {
        data: { results: characterDetail },
      },
    } = await BaseAPI.get<MarvelApiResponse>(`/characters/${routeParams.id}`, {
      params: params,
    });
    return characterDetail[0];
  };

  const GetCharacterComics = async () => {
    const {
      data: {
        data: { results: characterStories },
      },
    } = await BaseAPI.get<MarvelComicsResponse>(
      `/characters/${routeParams.id}/comics`,
      {
        params: { ...params, orderBy: "-onsaleDate" },
      }
    );

    return characterStories;
  };

  const { data: characterDetail, isLoading: isLoadingCharacterDetail } =
    useQuery("characterDetail", () => GetCharacter());
  const { data: characterStory, isLoading: isLoadingCharacterStories } =
    useQuery("characterStoryDetail", () => GetCharacterComics());

  const formatedData = characterDetail &&
    characterStory && {
      name: characterDetail?.name,
      id: characterDetail?.id,
      description: characterDetail?.description,
      image:
        characterDetail?.thumbnail.path +
        "." +
        characterDetail?.thumbnail.extension,
      stories: characterStory?.reduce((acc: ComicFormated[], story) => {
        acc.push({
          title: story.title,
          image: story.thumbnail.path + "." + story.thumbnail.extension,
          lastReleaseDate: story.dates[0].date,
        });

        return acc;
      }, []),
    };

  return {
    routeParams,
    data: formatedData,
    isLoading: isLoadingCharacterDetail || isLoadingCharacterStories,
  };
};
