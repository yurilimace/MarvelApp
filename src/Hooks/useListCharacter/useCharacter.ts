import md5 from "md5";
import { useQuery } from "react-query";
import { BaseAPI } from "../../services";
import { useState } from "react";
import { FilterObject } from "../../Components/Filter/Filter";
import { MarvelApiResponse } from "../../types";

export const useListCharacter = () => {
  const publicKey = "752394fc40641a008eaf8f55fe23ecca";
  const privateKey = "06df6464521748172dcd5997dfe1e898f75f91e0";
  const timeStamp = Number(new Date());

  const hash = md5(timeStamp + privateKey + publicKey);

  const limit = 20;

  const [offset, setOffset] = useState(0);

  const [searchInput, setSearchInput] = useState("");

  const [filter, setFilter] = useState<FilterObject>({
    orderBy: "asc",
    showFavorite: false,
  });

  const [currentPage, setCurrentPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);

  console.log(currentPage);

  const params = {
    ts: timeStamp,
    apikey: publicKey,
    hash: hash,
    offset: limit * currentPage,
    ...(searchInput !== "" && { nameStartsWith: searchInput }),
    ...(filter.orderBy === "asc" ? { orderBy: "name" } : { orderBy: "-name" }),
  };

  const List = async () => {
    const {
      data: {
        data: { results: response, total: TotalItens },
      },
    } = await BaseAPI.get<MarvelApiResponse>("/characters", {
      params: { ...params },
    });

    setLastPage(Math.ceil(TotalItens / limit));

    return response;
  };

  const { data, isLoading, isRefetching, refetch } = useQuery(
    ["characterList", offset, searchInput, filter, currentPage],
    () => List()
  );

  const formatedData = data?.map((char) => ({
    name: char.name,
    id: char.id,
    description: char.description,
    image: char.thumbnail.path + "." + char.thumbnail.extension,
  }));

  return {
    data: formatedData,
    isLoading,
    isRefetching,
    refetch,
    setOffset,
    setSearchInput,
    filter,
    setFilter,
    limit,
    currentPage,
    setCurrentPage,
    lastPage,
  };
};
