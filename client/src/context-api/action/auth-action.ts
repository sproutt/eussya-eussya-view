import { Dispatch } from "react";

export type Auth = {
  isLogined?: boolean;
};

export type AuthAction =
  | {
      type: "LOGIN";
    }
  | {
      type: "LOGOUT";
    }
  | {
      type: "CUSTOM";
      isLogined: boolean;
    };

export type AuthDispatch = Dispatch<AuthAction>;
