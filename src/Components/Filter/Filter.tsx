import ToggleSwitch from "../../assets/toggle_off.svg";
import HeroIcon from "../../assets/ic_heroi.svg";
import FavoriteIcon from "../../assets/favorito_01.svg";
import "./Filter.css";
export const Filter = () => {
  return (
    <div className="Phrase-container">
      <div className="ToggleSwitchContainer">
        <span> Encontrados X herois </span>
      </div>
      <div className="ToggleSwitchContainer">
        <img src={HeroIcon} />
        <span> Ordernar por nome - A/Z </span>
        <img src={ToggleSwitch} />
      </div>
      <div className="ToggleSwitchContainer">
        <img src={FavoriteIcon} />
        <span> Somente Favoritos </span>
      </div>
    </div>
  );
};
