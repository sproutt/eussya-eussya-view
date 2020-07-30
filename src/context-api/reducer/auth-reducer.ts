import { Auth, AuthAction } from "context-api/action/auth-action";

const authReducer = (state: Auth, action: AuthAction): Auth => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLogined: true };
    case "LOGOUT":
      return { ...state, isLogined: false };
    case "CUSTOM":
      return { ...state, isLogined: action.isLogined };
    default:
      return state;
  }
};

export default authReducer;
