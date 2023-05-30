import FavoriteIcon from "../../assets/favorito_01.svg";
import "./Card.css";
export const Card = () => {
  return (
    <div className="CardContainer">
      <img
        src={"http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860.jpg"}
      />
      <div className="CardDivider"></div>
      <div className="CardBody">
        <span> Carachter Name </span>
        <img src={FavoriteIcon} />
      </div>
    </div>
  );
};
