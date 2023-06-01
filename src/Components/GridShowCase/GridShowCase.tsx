import { useContext } from "react";
import { Card } from "../Card/Card";
import { ContextTest } from "../../Context/context";
import { CharacterFormated } from "../../types";

interface GridShowCaseProps {
  showFavorite: boolean;
  data: CharacterFormated[];
}

export const GridShowcase = ({ showFavorite, data }: GridShowCaseProps) => {
  const context = useContext(ContextTest);

  return (
    <div className="CardGridContainer">
      {!showFavorite &&
        data.map((el) => (
          <Card key={el.id} id={el.id} name={el.name} image={el.image} />
        ))}
      {showFavorite &&
        context?.contextValue.map((el) => (
          <Card key={el.id} id={el.id} name={el.name} image={el.image} />
        ))}
    </div>
  );
};
