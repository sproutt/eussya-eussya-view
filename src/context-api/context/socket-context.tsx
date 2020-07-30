import * as React from "react";
import { Socket, SocketDispatch } from "context-api/action/socket-action";
import socketReducer from "context-api/reducer/socket-reducer";

const SocketContext = React.createContext<Socket | undefined>(undefined);

const SocketDispatchContext = React.createContext<SocketDispatch | undefined>(
  undefined
);

export const SocketContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [socket, dispatch] = React.useReducer(socketReducer, undefined);
  return (
    <SocketDispatchContext.Provider value={dispatch}>
      <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
    </SocketDispatchContext.Provider>
  );
};

export const useSocket = () => {
  const state = React.useContext(SocketContext);
  return state;
};

export const useSocketDispatch = () => {
  const dispatch = React.useContext(SocketDispatchContext);
  if (!dispatch) throw new Error("SocketDispatchContextProvider not found");
  return dispatch;
};
