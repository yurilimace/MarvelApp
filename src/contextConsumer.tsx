import { useContext, useReducer, useState } from "react";
import { ContextTest } from "./context";
import "./contextConsumer.css";

type State = {
  nome: string;
  idade: number;
  email: string;
  id: number;
};

type Action = {
  type: "add" | "update" | "delete";
  payload: State | number;
};

const ContextConsumerReducer: React.Reducer<State[], Action> = (
  state,
  action
) => {
  switch (action.type) {
    case "add": {
      // const newPersonIndex = state[-1].id + 1;
      const newPerson = action.payload as State;
      const newState = [...state, newPerson];
      return newState;
    }
    case "update": {
      console.log("update", action.payload);
      return state;
    }
    case "delete": {
      const deleteId = action.payload as number;

      return [...state.filter((person) => person.id != deleteId)];
    }
    default: {
      console.log("default");
      return state;
    }
  }
};

export const ContextConsumer = () => {
  const contextValue = useContext(ContextTest);

  const [state, dispatch] = useReducer(ContextConsumerReducer, [
    { nome: "João", idade: 25, email: "joao@example.com", id: 1 },
    { nome: "Maria", idade: 30, email: "maria@example.com", id: 2 },
    { nome: "Pedro", idade: 28, email: "pedro@example.com", id: 3 },
  ]);

  const [value, setValue] = useState("value");

  return (
    <div>
      <h2> {contextValue?.contextValue} </h2>
      <h2> {value} </h2>
      <button onClick={() => contextValue?.updateContextValue()}>
        mudar o valor
      </button>
      <div>
        {state.map((person) => (
          <p>
            {" "}
            {person.nome},{person.idade},{person.email}{" "}
          </p>
        ))}
      </div>
      <div className="groupedButton">
        <button
          onClick={() => {
            dispatch({
              type: "add",
              payload: {
                nome: "João",
                idade: 25,
                email: "joao@example.com",
                id: 0,
              },
            });
          }}
        >
          Add
        </button>
        <button onClick={() => setValue("novo valor")}> Update </button>
        <button
          onClick={() => {
            dispatch({
              type: "delete",
              payload: 2,
            });
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
