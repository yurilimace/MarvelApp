import { createContext, useState } from "react";
import { CharacterFormated } from "../types";

interface ContextComponentProps {
  children: React.ReactNode;
}

type Context = {
  contextValue: CharacterFormated[] | [];
  IsFavoriteCharacter: (id: number) => boolean;
  AddFavoriteCharacter: (char: CharacterFormated) => void;
  RemoveFavoriteCharacter: (id: number) => void;
  updateContextValue: (characters: CharacterFormated[]) => void;
};

const contextInitialValue = {
  contextValue: [],
  IsFavoriteCharacter: () => false,
  AddFavoriteCharacter: () => null,
  RemoveFavoriteCharacter: () => null,
  updateContextValue: () => null,
};

export const ContextTest = createContext<Context>(contextInitialValue);

export const ContextComponent = ({ children }: ContextComponentProps) => {
  const [contextValue, setContextValue] = useState<CharacterFormated[]>(() => {
    const localStorageData = localStorage.getItem("favoriteCharacters");
    return localStorageData ? JSON.parse(localStorageData) : [];
  });

  const IsFavoriteCharacter = (id: number) => {
    return contextValue.some((el: CharacterFormated) => el.id === id);
  };

  const AddFavoriteCharacter = (char: CharacterFormated) => {
    if (contextValue.length < 5) {
      const newArr = [...contextValue, char];
      setContextValue(newArr);
      localStorage.setItem("favoriteCharacters", JSON.stringify(newArr));
    }
  };

  const RemoveFavoriteCharacter = (id: number) => {
    const newArr = contextValue.filter((el: any) => el.id !== id);
    setContextValue(newArr);
    localStorage.setItem("favoriteCharacters", JSON.stringify(newArr));
  };

  const updateContextValue = (newArr: CharacterFormated[]) => {
    setContextValue(newArr);
  };

  return (
    <ContextTest.Provider
      value={{
        contextValue,
        updateContextValue,
        IsFavoriteCharacter,
        AddFavoriteCharacter,
        RemoveFavoriteCharacter,
      }}
    >
      {children}
    </ContextTest.Provider>
  );
};
