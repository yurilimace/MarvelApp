import HeroIcon from "../../assets/ic_heroi.svg";

import "./Filter.css";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";

export interface FilterObject {
  orderBy: "asc" | "dsc";
  showFavorite: boolean;
}

interface FilterProps {
  filterType: FilterObject;
  setFilterType: (filterValue: FilterObject) => void;
  favoriteCharactersSize: number;
}

export const Filter = ({
  filterType,
  setFilterType,
  favoriteCharactersSize,
}: FilterProps) => {
  const FilterOrderByDefaultValue = () => {
    if (filterType.orderBy === "asc") {
      return true;
    }
    return false;
  };

  const handleFilterOrderByChange = (value: boolean) => {
    if (value) {
      setFilterType({ ...filterType, orderBy: "asc" });
    } else {
      setFilterType({ ...filterType, orderBy: "dsc" });
    }
  };

  const handleFilterShowFavoriteCharacters = () => {
    console.log("disparou");
    setFilterType({ ...filterType, showFavorite: !filterType.showFavorite });
  };

  return (
    <div className="Phrase-container">
      <div className="ToggleSwitchContainer">
        <span> Encontrado {favoriteCharactersSize} heróis </span>
      </div>
      <div className="ToggleSwitchContainer">
        <img src={HeroIcon} />
        <span> Ordernar por nome - A/Z </span>
        <ToggleSwitch
          defaultValue={FilterOrderByDefaultValue}
          handleChange={handleFilterOrderByChange}
        />
      </div>
      <div className="ToggleSwitchContainer">
        <FavoriteButton
          onClick={handleFilterShowFavoriteCharacters}
          favoriteIcon={() => filterType.showFavorite}
          title="Somente Favoritos"
        />
      </div>
    </div>
  );
};
