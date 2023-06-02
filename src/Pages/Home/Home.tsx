import "./Home.css";

import { Card } from "../../Components/Card/Card";
import { Logo } from "../../Components/Logo/Logo";
import MarvelLogo from "../../assets/logo.svg";
import { SearchInput } from "../../Components/SearchInput/SearchInput";
import { Filter } from "../../Components/Filter/Filter";
import { useListCharacter } from "../../Hooks/useListCharacter/useCharacter";
import { useContext, useState } from "react";
import { Pagination } from "../../Components/Pagination/Pagination";
import { GridShowcase } from "../../Components/GridShowCase/GridShowCase";
import { Loading } from "../../Components/Loading/Loading";
import { ContextTest } from "../../Context/context";

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
    currentPage,
    setCurrentPage,
    lastPage,
  } = useListCharacter();

  const context = useContext(ContextTest);

  return (
    <div className="HomeContainer">
      <div className="HomeHeader">
        <Logo src={MarvelLogo} />
        <h2 className="Subtitle">
          <strong> EXPLORE O UNIVERSO </strong>
        </h2>
        <span className="SubHeader">
          mergulhe no domínio deslumbrante de todos os personagens clássicos que
          voce ama - e aqueles que você descobrirá em breve{" "}
        </span>
        <SearchInput setSearchInput={setSearchInput} />
      </div>

      {(isLoading || isRefetching) && <Loading />}

      {data && (
        <>
          <Filter
            filterType={filter}
            setFilterType={setFilter}
            favoriteCharactersSize={
              filter.showFavorite ? context?.contextValue.length : data.length
            }
          />
          <GridShowcase showFavorite={filter.showFavorite} data={data} />
        </>
      )}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lastPage={lastPage}
      />
    </div>
  );
};
