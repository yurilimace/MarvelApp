import { format, parseISO } from "date-fns";
import { CharacterAppearances } from "../CharacterAppearancesCounter/CharacterAppearances";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import "./CharacterProfileSection.css";
import { useContext } from "react";
import { ContextTest } from "../../Context/context";
import { CharacterDetailFormated } from "../../types";

interface CharacterProfileSectionProps {
  data: CharacterDetailFormated;
}

export const CharacterProfileSection = ({
  data,
}: CharacterProfileSectionProps) => {
  const { IsFavoriteCharacter, AddFavoriteCharacter, RemoveFavoriteCharacter } =
    useContext(ContextTest);
  const date = parseISO(data.stories[0].lastReleaseDate);
  const formatedDate = date.toLocaleString("pt-br", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const HandleClick = () => {
    if (IsFavoriteCharacter(data.id)) {
      RemoveFavoriteCharacter(data.id);
    } else {
      AddFavoriteCharacter({
        name: data.name,
        id: data.id,
        image: data.image,
      });
    }
  };

  return (
    <div>
      <div className={"CharacterProfileContainer"}>
        <h2>
          <strong> {data.name} </strong>
        </h2>
        <FavoriteButton
          onClick={HandleClick}
          favoriteIcon={() => IsFavoriteCharacter(data.id)}
        />
      </div>
      <p>{data.description}</p>
      <CharacterAppearances comicsAppearances={data.stories.length} />
      <span className="LastComicReleasedText">
        <strong> Ultimo quadrinho: {formatedDate} </strong>
      </span>
    </div>
  );
};
