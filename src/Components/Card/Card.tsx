import { useState } from "react";

import "./Card.css";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";

interface CardProps {
  name: string;
  image: string;
  id: number;
  favoriteCharacterList: { id: number; name: string; image: string }[];
  setFavoriteCharacterList: (
    arr: { id: number; name: string; image: string }[] | []
  ) => void;
}

export const Card = ({
  name,
  image,
  id,
  favoriteCharacterList,
  setFavoriteCharacterList,
}: CardProps) => {
  const isFavoriteCharacter = () => {
    return favoriteCharacterList.some((el) => el.id === id);
  };

  const HandleClick = () => {
    if (isFavoriteCharacter()) {
      const newArr = favoriteCharacterList.filter((el) => el.id != id);
      setFavoriteCharacterList(newArr);
      localStorage.setItem("favoriteCharacters", JSON.stringify(newArr));
      return;
    }

    // adicionar personagem da lista
    if (favoriteCharacterList.length < 5) {
      const newArr = [...favoriteCharacterList, { id, name, image }];
      setFavoriteCharacterList(newArr);
      localStorage.setItem("favoriteCharacters", JSON.stringify(newArr));
    }
  };

  return (
    <div className="CardContainer">
      <img src={image} />
      <div className="CardDivider"></div>
      <div className="CardBody">
        <span>
          {" "}
          <strong> {name} </strong>{" "}
        </span>
        <FavoriteButton
          onClick={HandleClick}
          favoriteIcon={isFavoriteCharacter}
        />
      </div>
    </div>
  );
};
