import * as React from "react";
import { Grass, GrassDispatch } from "context-api/action/grass-action";
import grassReducer from "context-api/reducer/grass-reducer";

const GrassContext = React.createContext<Grass | undefined>(undefined);

const GrassDispatchContext = React.createContext<GrassDispatch | undefined>(
  undefined
);

export const GrassContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const initialState: Grass = new Map();
  const [grass, dispatch] = React.useReducer(grassReducer, initialState);

  return (
    <GrassDispatchContext.Provider value={dispatch}>
      <GrassContext.Provider value={grass}>{children}</GrassContext.Provider>
    </GrassDispatchContext.Provider>
  );
};

export const useGrass = () => {
  const state = React.useContext(GrassContext);
  if (!state) throw new Error("GrassContextProvider not found");
  return state;
};

export const useGrassDispatch = () => {
  const dispatch = React.useContext(GrassDispatchContext);
  if (!dispatch) throw new Error("GrassDispatchContextProvider not found");
  return dispatch;
};
