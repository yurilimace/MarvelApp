import { useContext, useState } from "react";

import "./Card.css";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { Link } from "react-router-dom";
import { ContextTest } from "../../Context/context";

interface CardProps {
  name: string;
  image: string;
  id: number;
}

export const Card = ({ name, image, id }: CardProps) => {
  const context = useContext(ContextTest);

  const isFavoriteCharacter = () => {
    if (context?.contextValue) {
      return context?.contextValue.some((el) => el.id === id);
    }
    return false;
  };

  const HandleClick = () => {
    if (isFavoriteCharacter()) {
      const newArr = context?.contextValue.filter((el) => el.id != id);
      context?.updateContextValue(newArr || []);
      localStorage.setItem("favoriteCharacters", JSON.stringify(newArr || []));
      return;
    }

    // adicionar personagem da lista
    if (context?.contextValue && context?.contextValue.length < 5) {
      const newArr = [...context.contextValue, { id, name, image }];
      context?.updateContextValue(newArr);
      localStorage.setItem("favoriteCharacters", JSON.stringify(newArr));
    }
  };

  return (
    <div className="CardContainer">
      <img src={image} />
      <div className="CardDivider"></div>
      <div className="CardBody">
        <Link to={`/character/${id}`}>
          {" "}
          <strong> {name} </strong>{" "}
        </Link>
        <FavoriteButton
          onClick={HandleClick}
          favoriteIcon={isFavoriteCharacter}
        />
      </div>
    </div>
  );
};
