import { format, parseISO } from "date-fns";
import { CharacterAppearances } from "../CharacterAppearancesCounter/CharacterAppearances";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import "./CharacterProfileSection.css";
import { useContext } from "react";
import { ContextTest } from "../../Context/context";

interface CharacterProfileSectionProps {
  name: string;
  description: string;
  appearances: number;
  lastReleaseDate: string;
}

export const CharacterProfileSection = ({
  name,
  description,
  appearances,
  lastReleaseDate,
}: CharacterProfileSectionProps) => {
  // const { IsFavoriteCharacter, AddFavoriteCharacter, RemoveFavoriteCharacter } =
  //   useContext(ContextTest);
  const date = parseISO(lastReleaseDate);
  const formatedDate = date.toLocaleString("pt-br", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  // const HandleClick = () => {
  //   if (IsFavoriteCharacter(id)) {
  //     RemoveFavoriteCharacter(id);
  //   } else {
  //     AddFavoriteCharacter({ id, name, image });
  //   }
  // };

  return (
    <div>
      <div className={"CharacterProfileContainer"}>
        <h2>
          <strong> {name} </strong>
        </h2>
        <FavoriteButton
          onClick={() => console.log("aaa")}
          favoriteIcon={() => false}
        />
      </div>
      <p>{description}</p>
      <CharacterAppearances comicsAppearances={appearances} />
      <span className="LastComicReleasedText">
        Ultimo quadrinho:{formatedDate}
      </span>
    </div>
  );
};
