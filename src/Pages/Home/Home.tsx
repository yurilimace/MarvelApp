import Logo from "../../assets/logo.svg";
import ToggleSwitch from "../../assets/toggle_off.svg";
import HeroIcon from "../../assets/ic_heroi.svg";
import FavoriteIcon from "../../assets/favorito_01.svg";
import "./Home.css";
import "./Card.css";

export const Home = () => {
  return (
    <div className="HomeContainer">
      <img className="Logo" src={Logo} />
      <h2 className="Subtitle">
        <strong> EXPLORE O UNIVERSO </strong>
      </h2>
      <span className="SubHeader">
        mergulhe no domínio deslumbrante de todos os personagens clássicos que
        voce ama - e aqueles que você descobrirá em breve{" "}
      </span>
      <div className="SearchInputContainer">
        <input className="SearchInput" />
      </div>
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
      <div className="CardGridContainer">
        <div> Card 1 </div>
        <div> Card 2 </div>
        <div> Card 3 </div>
        <div> Card 4 </div>
        <div> Card 1 </div>
        <div> Card 2 </div>
        <div> Card 3 </div>
        <div> Card 4 </div>
      </div>
    </div>
  );
};
