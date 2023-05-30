// import ToggleSwitch from "../../assets/toggle_off.svg";
import HeroIcon from "../../assets/ic_heroi.svg";
import FavoriteIcon from "../../assets/favorito_01.svg";
import "./Filter.css";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";

interface FilterProps {
  filterType: string;
  setFilterType: (filterValue: string) => void;
}

export const Filter = ({ filterType, setFilterType }: FilterProps) => {
  const FilterDefaultValue = () => {
    if (filterType === "asc") {
      return true;
    }
    return false;
  };

  const handleFilterChange = (value: boolean) => {
    if (value) {
      setFilterType("asc");
    } else {
      setFilterType("dsc");
    }
  };

  return (
    <div className="Phrase-container">
      <div className="ToggleSwitchContainer">
        <span> Encontrados X herois </span>
      </div>
      <div className="ToggleSwitchContainer">
        <img src={HeroIcon} />
        <span> Ordernar por nome - A/Z </span>
        <ToggleSwitch
          defaultValue={FilterDefaultValue}
          handleChange={handleFilterChange}
        />
      </div>
      <div className="ToggleSwitchContainer">
        <img src={FavoriteIcon} />
        <span> Somente Favoritos </span>
      </div>
    </div>
  );
};
