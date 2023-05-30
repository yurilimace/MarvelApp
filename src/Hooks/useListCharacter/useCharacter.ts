import md5 from "md5";
import { useQuery } from "react-query";
import { BaseAPI } from "../../services";
import { useState } from "react";
import { FilterObject } from "../../Components/Filter/Filter";

export const useListCharacter = () => {
  const publicKey = "752394fc40641a008eaf8f55fe23ecca";
  const privateKey = "06df6464521748172dcd5997dfe1e898f75f91e0";
  const timeStamp = Number(new Date());

  const hash = md5(timeStamp + privateKey + publicKey);

  const limit = 20;

  const [offset, setOffset] = useState(0);

  const [favoriteCharacters, setFavoriteCharacters] = useState(() => {
    const localStorageData = localStorage.getItem("favoriteCharacters");
    return localStorageData ? JSON.parse(localStorageData) : [];
  });

  const [searchInput, setSearchInput] = useState("");

  const [filter, setFilter] = useState<FilterObject>({
    orderBy: "asc",
    showFavorite: false,
  });

  const params = {
    ts: timeStamp,
    apikey: publicKey,
    hash: hash,
    offset: offset,
    ...(searchInput !== "" && { nameStartsWith: searchInput }),
    ...(filter.orderBy === "asc" ? { orderBy: "name" } : { orderBy: "-name" }),
  };

  const List = async () => {
    const response = await BaseAPI.get("/characters", {
      params: { ...params },
    });
    return response.data.data.results;
  };

  console.log(searchInput);

  const { data, isLoading, isRefetching, refetch } = useQuery(
    ["characterList", offset, searchInput, filter],
    () => List()
  );

  return {
    data,
    isLoading,
    isRefetching,
    refetch,
    setOffset,
    setSearchInput,
    filter,
    setFilter,
    favoriteCharacters,
    setFavoriteCharacters,
    limit,
  };
};
