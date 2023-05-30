import { useState } from "react";
import FavoriteIcon from "../../assets/favorito_01.svg";
import UnfavoriteIcon from "../../assets/favorito_02.svg";
import "./Card.css";

interface CardProps {
  name: string;
  image: string;
  id: number;
  favoriteCharacterList: number[];
  setFavoriteCharacterList: (arr: number[] | []) => void;
}

export const Card = ({
  name,
  image,
  id,
  favoriteCharacterList,
  setFavoriteCharacterList,
}: CardProps) => {
  const isFavoriteCharacter = () => {
    return favoriteCharacterList.some((el: number) => el === id);
  };

  const HandleClick = () => {
    if (isFavoriteCharacter()) {
      const newArr = favoriteCharacterList.filter((el) => el != id);
      setFavoriteCharacterList(newArr);
      localStorage.setItem("favoriteCharacters", JSON.stringify(newArr));
    }

    // adicionar personagem da lista
    if (favoriteCharacterList.length < 5) {
      const newArr = [...favoriteCharacterList, id];
      setFavoriteCharacterList(newArr);
      localStorage.setItem("favoriteCharacters", JSON.stringify(newArr));
    }
  };

  return (
    <div className="CardContainer">
      <img src={image} />
      <div className="CardDivider"></div>
      <div className="CardBody">
        <span> {name} </span>
        <button onClick={() => HandleClick()} className="FavoriteButton">
          {isFavoriteCharacter() ? (
            <img src={FavoriteIcon} />
          ) : (
            <img src={UnfavoriteIcon} />
          )}
          {/* <img src={FavoriteIcon} /> */}
        </button>
      </div>
    </div>
  );
};
