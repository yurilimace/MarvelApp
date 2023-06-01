import Comics from "../../assets/ic_quadrinhos.svg";
import Movies from "../../assets/ic_trailer.svg";
import "./CharacterAppearances.css";

interface CharacterAppearances {
  comicsAppearances: number;
  moviesAppearances?: number | 0;
}

export const CharacterAppearances = ({
  comicsAppearances,
  moviesAppearances = 0,
}: CharacterAppearances) => {
  return (
    <div className={"CharacterAppearancesContainer"}>
      <div className="CharacterAppearancesItem">
        <span> Quadrinhos </span>
        <div>
          <img src={Comics} />
          <span> {comicsAppearances} </span>
        </div>
      </div>
      <div className="CharacterAppearancesItem">
        <span> Filmes </span>
        <div>
          <img src={Movies} />
          <span> {moviesAppearances} </span>
        </div>
      </div>
    </div>
  );
};
