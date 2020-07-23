import * as React from "react";
import { Auth, AuthDispatch } from "context-api/action/auth-action";
import authReducer from "context-api/reducer/auth-reducer";

const AuthContext = React.createContext<Auth | undefined>(undefined);

const AuthDispatchContext = React.createContext<AuthDispatch | undefined>(
  undefined
);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const initialState: Auth = { isLogined: undefined };
  const [auth, dispatch] = React.useReducer(authReducer, initialState);

  return (
    <AuthDispatchContext.Provider value={dispatch}>
      <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
    </AuthDispatchContext.Provider>
  );
};

export const useAuth = () => {
  const state = React.useContext(AuthContext);
  if (!state) throw new Error("AuthContextProvider not found");
  return state;
};

export const useAuthDispatch = () => {
  const dispatch = React.useContext(AuthContext);
  if (!dispatch) throw new Error("AuthDispatchContextProvider not found");
  return dispatch;
};
