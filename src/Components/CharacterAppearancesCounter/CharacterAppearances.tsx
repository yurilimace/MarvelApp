import Comics from "../../assets/ic_quadrinhos.svg";
import Movies from "../../assets/ic_trailer.svg";
import "./CharacterAppearances.css";

export const CharacterAppearances = () => {
  return (
    <div className={"CharacterAppearancesContainer"}>
      <div className="CharacterAppearancesItem">
        <span> Quadrinhos </span>
        <div>
          <img src={Comics} />
          <span> 1000 </span>
        </div>
      </div>
      <div className="CharacterAppearancesItem">
        <span> Filmes </span>
        <div>
          <img src={Movies} />
          <span> 1000 </span>
        </div>
      </div>
    </div>
  );
};
