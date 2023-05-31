import { CharacterAppearances } from "../CharacterAppearancesCounter/CharacterAppearances";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import "./CharacterProfileSection.css";

export const CharacterProfileSection = () => {
  return (
    <div>
      <div className={"CharacterProfileContainer"}>
        <h2>
          <strong> Name </strong>
        </h2>
        <FavoriteButton
          onClick={() => console.log("aaa")}
          favoriteIcon={() => false}
        />
      </div>
      <p>
        Adam Warlock is an artificially created human who was born in a cocoon
        at a scientific complex called The Beehive.
      </p>
      <CharacterAppearances />
      <span className="LastComicReleasedText">
        {" "}
        Ultimo quadrinho: 11/03/2023{" "}
      </span>
    </div>
  );
};
