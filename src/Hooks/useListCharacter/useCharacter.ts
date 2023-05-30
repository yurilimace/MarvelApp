import md5 from "md5";
import { useQuery } from "react-query";
import { BaseAPI } from "../../services";
import { useState } from "react";

export const useListCharacter = () => {
  const publicKey = "752394fc40641a008eaf8f55fe23ecca";
  const privateKey = "06df6464521748172dcd5997dfe1e898f75f91e0";
  const timeStamp = Number(new Date());

  const hash = md5(timeStamp + privateKey + publicKey);

  const limit = 20;

  const [offset, setOffset] = useState(0);

  const [searchInput, setSearchInput] = useState("");

  const [order, setOrder] = useState("asc");

  const params = {
    ts: timeStamp,
    apikey: publicKey,
    hash: hash,
    offset: offset,
    ...(searchInput !== "" && { nameStartsWith: searchInput }),
    ...(order === "asc" ? { orderBy: "name" } : { orderBy: "-name" }),
  };

  const List = async () => {
    const response = await BaseAPI.get("/characters", {
      params: { ...params },
    });
    return response.data.data.results;
  };

  console.log(searchInput);

  const { data, isLoading, isRefetching, refetch } = useQuery(
    ["characterList", offset, searchInput, order],
    () => List()
  );

  return {
    data,
    isLoading,
    isRefetching,
    refetch,
    setOffset,
    setSearchInput,
    order,
    setOrder,
    limit,
  };
};
