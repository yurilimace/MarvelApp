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
  const { IsFavoriteCharacter, RemoveFavoriteCharacter, AddFavoriteCharacter } =
    useContext(ContextTest);

  const HandleClick = () => {
    if (IsFavoriteCharacter(id)) {
      RemoveFavoriteCharacter(id);
    } else {
      AddFavoriteCharacter({ id, name, image });
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
          favoriteIcon={() => IsFavoriteCharacter(id)}
        />
      </div>
    </div>
  );
};
