import { createContext, useState } from "react";

interface ContextComponentProps {
  children: React.ReactNode;
}

type Character = {
  id: number;
  image: string;
  name: string;
};

type Context = {
  contextValue: Character[] | [];
  IsFavoriteCharacter: (id: number) => boolean;
  AddFavoriteCharacter: (char: Character) => void;
  RemoveFavoriteCharacter: (id: number) => void;
  updateContextValue: (characters: Character[]) => void;
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
  const [contextValue, setContextValue] = useState<Character[]>(() => {
    const localStorageData = localStorage.getItem("favoriteCharacters");
    return localStorageData ? JSON.parse(localStorageData) : [];
  });

  const IsFavoriteCharacter = (id: number) => {
    return contextValue.some((el: Character) => el.id === id);
  };

  const AddFavoriteCharacter = (char: Character) => {
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

  const updateContextValue = (newArr: Character[]) => {
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
