import FavoriteIcon from "../../assets/favorito_01.svg";
import "./Card.css";

interface CardProps {
  name: string;
  image: string;
}

export const Card = ({ name, image }: CardProps) => {
  return (
    <div className="CardContainer">
      <img src={image} />
      <div className="CardDivider"></div>
      <div className="CardBody">
        <span> {name} </span>
        <img src={FavoriteIcon} />
      </div>
    </div>
  );
};
