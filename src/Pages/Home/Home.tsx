import "./Home.css";

import { Card } from "../../Components/Card/Card";
import { Logo } from "../../Components/Logo/Logo";
import { SearchInput } from "../../Components/SearchInput/SearchInput";
import { Filter } from "../../Components/Filter/Filter";
import { useListCharacter } from "../../Hooks/useListCharacter/useCharacter";
import { useState } from "react";
import { Pagination } from "../../Components/Pagination/Pagination";

export const Home = () => {
  const {
    data,
    isLoading,
    limit,
    refetch,
    setOffset,
    setSearchInput,
    isRefetching,
  } = useListCharacter();

  const [favoriteCharacters, setFavoriteCharacters] = useState(() => {
    const localStorageData = localStorage.getItem("favoriteCharacters");
    return localStorageData ? JSON.parse(localStorageData) : [];
  });

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
      <SearchInput setSearchInput={setSearchInput} />
      <Filter />
      {isLoading || isRefetching ? (
        <div> Carregando </div>
      ) : (
        <div className="CardGridContainer">
          {data.map((el: any) => (
            <Card
              favoriteCharacterList={favoriteCharacters}
              setFavoriteCharacterList={setFavoriteCharacters}
              key={el.id}
              id={el.id}
              name={el.name}
              image={el.thumbnail.path + "." + el.thumbnail.extension}
            />
          ))}
        </div>
      )}

      {/* <button
        onClick={() => {
          setOffset((prevState) => (prevState += limit));
          // refetch();
        }}
      >
        ChangePage
      </button> */}
      <Pagination />
    </div>
  );
};
