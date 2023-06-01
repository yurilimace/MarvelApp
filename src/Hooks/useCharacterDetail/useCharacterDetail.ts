import md5 from "md5";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { BaseAPI } from "../../services";
import { useQuery } from "react-query";

export const useCharacterDetail = () => {
  const publicKey = "752394fc40641a008eaf8f55fe23ecca";
  const privateKey = "06df6464521748172dcd5997dfe1e898f75f91e0";
  const timeStamp = Number(new Date());

  const hash = md5(timeStamp + privateKey + publicKey);

  const [favoriteCharacters, setFavoriteCharacters] = useState(() => {
    const localStorageData = localStorage.getItem("favoriteCharacters");
    return localStorageData ? JSON.parse(localStorageData) : [];
  });

  const routeParams = useParams();

  const params = {
    ts: timeStamp,
    apikey: publicKey,
    hash: hash,
  };

  const getCharacterDetails = async () => {
    const {
      data: {
        data: { results: characterDetail },
      },
    } = await BaseAPI.get(`/characters/${routeParams.id}`, { params: params });

    const {
      data: {
        data: { results: characterStories },
      },
    } = await BaseAPI.get(`/characters/${routeParams.id}/comics`, {
      params: { ...params, orderBy: "-onsaleDate" },
    });

    const detailObject = {
      characterName: characterDetail[0].name,
      characterDescprition: characterDetail[0].description,
      image:
        characterDetail[0].thumbnail.path +
        "." +
        characterDetail[0].thumbnail.extension,
      stories: characterStories.map((story: any) => ({
        title: story.title,
        image: story.thumbnail.path + "." + story.thumbnail.extension,
        lastReleaseDate: story.dates[0].date,
      })),
    };

    return detailObject;
  };

  const { data } = useQuery("characterDetail", () => getCharacterDetails());

  return {
    routeParams,
    data,
  };
};
