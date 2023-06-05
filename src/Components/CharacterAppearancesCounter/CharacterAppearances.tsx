import Comics from "../../assets/ic_quadrinhos.svg";
import Movies from "../../assets/ic_trailer.svg";
import "./CharacterAppearances.css";

interface CharacterAppearancesProps {
  comicsAppearances: number;
  moviesAppearances?: number | 0;
}

export const CharacterAppearances = ({
  comicsAppearances,
  moviesAppearances = 0,
}: CharacterAppearancesProps) => {
  return (
    <div className={"CharacterAppearancesContainer"}>
      <div className="CharacterAppearancesItem">
        <span> Quadrinhos </span>
        <div>
          <img alt="comicCounterIcon" src={Comics} />
          <span data-testId={"comicCounter"}> {comicsAppearances} </span>
        </div>
      </div>
      <div className="CharacterAppearancesItem">
        <span> Filmes </span>
        <div>
          <img alt="movieCounterIcon" src={Movies} />
          <span data-testId={"movieCounter"}> {moviesAppearances} </span>
        </div>
      </div>
    </div>
  );
};
