import { useContext } from "react";
import { Card } from "../Card/Card";
import { ContextTest } from "../../Context/context";

interface GridShowCaseProps {
  showFavorite: boolean;
  data: any;
}

export const GridShowcase = ({ showFavorite, data }: GridShowCaseProps) => {
  const context = useContext(ContextTest);

  return (
    <div className="CardGridContainer">
      {!showFavorite &&
        data.map((el: any) => (
          <Card
            key={el.id}
            id={el.id}
            name={el.name}
            image={el.thumbnail.path + "." + el.thumbnail.extension}
          />
        ))}
      {showFavorite &&
        context?.contextValue.map((el: any) => (
          <Card key={el.id} id={el.id} name={el.name} image={el.image} />
        ))}
    </div>
  );
};
