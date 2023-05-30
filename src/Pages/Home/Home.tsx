import "./Home.css";

import { Card } from "../../Components/Card/Card";
import { Logo } from "../../Components/Logo/Logo";
import { SearchInput } from "../../Components/SearchInput/SearchInput";
import { Filter } from "../../Components/Filter/Filter";
import { useListCharacter } from "../../Hooks/useListCharacter/useCharacter";
import { useState } from "react";
import { Pagination } from "../../Components/Pagination/Pagination";
import { GridShowcase } from "../../Components/GridShowCase/GridShowCase";

export const Home = () => {
  const {
    data,
    isLoading,
    limit,
    refetch,
    setOffset,
    setSearchInput,
    isRefetching,
    filter,
    setFilter,
    favoriteCharacters,
    setFavoriteCharacters,
  } = useListCharacter();

  return (
    <div className="HomeContainer">
      <Logo />
      <h2 className="Subtitle">
        <strong> EXPLORE O UNIVERSO </strong>
      </h2>
      <span className="SubHeader">
        mergulhe no domínio deslumbrante de todos os personagens clássicos que
        voce ama - e aqueles que você descobrirá em breve{" "}
      </span>

      {isLoading || isRefetching ? (
        <div> Carregando </div>
      ) : (
        <>
          <SearchInput setSearchInput={setSearchInput} />
          <Filter
            filterType={filter}
            setFilterType={setFilter}
            favoriteCharactersSize={
              filter.showFavorite ? favoriteCharacters.length : data.length
            }
          />
          <GridShowcase
            showFavorite={filter.showFavorite}
            data={data}
            favoriteCharacters={favoriteCharacters}
            setFavoriteCharacters={setFavoriteCharacters}
          />
        </>
      )}

      <Pagination />
    </div>
  );
};
