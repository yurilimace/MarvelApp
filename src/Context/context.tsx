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
  updateContextValue: (characters: Character[]) => void;
};

export const ContextTest = createContext<Context | null>(null);

export const ContextComponent = ({ children }: ContextComponentProps) => {
  const [contextValue, setContextValue] = useState(() => {
    const localStorageData = localStorage.getItem("favoriteCharacters");
    return localStorageData ? JSON.parse(localStorageData) : [];
  });

  const updateContextValue = (newArr: Character[]) => {
    setContextValue(newArr);
  };

  return (
    <ContextTest.Provider value={{ contextValue, updateContextValue }}>
      {children}
    </ContextTest.Provider>
  );
};
