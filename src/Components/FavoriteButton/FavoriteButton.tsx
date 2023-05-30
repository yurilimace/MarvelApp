import "./FavoriteButton.css";
import FavoriteIcon from "../../assets/favorito_01.svg";
import UnfavoriteIcon from "../../assets/favorito_02.svg";
interface FavoriteButtonProps {
  onClick: () => void;
  favoriteIcon: () => boolean;
  title?: string;
}

export const FavoriteButton = ({
  onClick,
  favoriteIcon,
  title,
}: FavoriteButtonProps) => {
  return (
    <button onClick={() => onClick()} className="FavoriteButton">
      {favoriteIcon() ? (
        <img src={FavoriteIcon} />
      ) : (
        <img src={UnfavoriteIcon} />
      )}
      {title && <span>{title} </span>}
    </button>
  );
};
