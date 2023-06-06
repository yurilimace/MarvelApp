import FavoriteIcon from "../../assets/favorito_01.svg";
import UnfavoriteIcon from "../../assets/favorito_02.svg";
import "./FavoriteButton.css";

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
    <button
      data-testid={"favorite-button"}
      onClick={() => onClick()}
      className="FavoriteButton"
    >
      {favoriteIcon() ? (
        <img alt="favoriteButtonIcon" src={FavoriteIcon} />
      ) : (
        <img alt="favoriteButtonIcon" src={UnfavoriteIcon} />
      )}
      {title && <span>{title} </span>}
    </button>
  );
};
