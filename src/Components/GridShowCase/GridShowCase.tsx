import { Card } from "../Card/Card";

interface GridShowCaseProps {
  showFavorite: boolean;
  data: any;
  favoriteCharacters: any;
  setFavoriteCharacters: any;
}

export const GridShowcase = ({
  showFavorite,
  data,
  favoriteCharacters,
  setFavoriteCharacters,
}: GridShowCaseProps) => {
  return (
    <div className="CardGridContainer">
      {!showFavorite &&
        data.map((el: any) => (
          <Card
            favoriteCharacterList={favoriteCharacters}
            setFavoriteCharacterList={setFavoriteCharacters}
            key={el.id}
            id={el.id}
            name={el.name}
            image={el.thumbnail.path + "." + el.thumbnail.extension}
          />
        ))}
      {showFavorite &&
        favoriteCharacters.map((el: any) => (
          <Card
            favoriteCharacterList={favoriteCharacters}
            setFavoriteCharacterList={setFavoriteCharacters}
            key={el.id}
            id={el.id}
            name={el.name}
            image={el.image}
          />
        ))}
    </div>
  );
};
