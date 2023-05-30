import { createContext, useState } from "react";

interface ContextComponentProps {
  children: React.ReactNode;
}

type Context = {
  contextValue: string;
  updateContextValue: () => void;
};

export const ContextTest = createContext<Context | null>(null);

export const ContextComponent = ({ children }: ContextComponentProps) => {
  const [contextValue, setContextValue] = useState("valor inicial");
  const updateContextValue = () => setContextValue("novo valor");
  return (
    <ContextTest.Provider value={{ contextValue, updateContextValue }}>
      {children}
    </ContextTest.Provider>
  );
};
