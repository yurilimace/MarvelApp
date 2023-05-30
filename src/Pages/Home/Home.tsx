import "./Home.css";

import axios from "axios";
import { Card } from "../../Components/Card/Card";
import { Logo } from "../../Components/Logo/Logo";
import { SearchInput } from "../../Components/SearchInput/SearchInput";
import { Filter } from "../../Components/Filter/Filter";

export const Home = () => {
  const element = [
    3, 7, 12, 9, 5, 1, 8, 6, 2, 4, 15, 11, 17, 14, 10, 13, 19, 16, 20, 18,
  ];
  return (
    <div className="HomeContainer">
      <Logo />
      <h2 className="Subtitle">
        <strong> EXPLORE O UNIVERSO </strong>
      </h2>
      <span className="SubHeader">
        mergulhe no domínio deslumbrante de todos os personagens clássicos que
        voce ama - e aqueles que você descobrirá em breve{" "}
      </span>
      <SearchInput />
      <Filter />
      <div className="CardGridContainer">
        {element.map((el) => (
          <Card />
        ))}
      </div>
    </div>
  );
};
