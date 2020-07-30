import { Dispatch } from "react";
import Stomp from "stompjs";
export type Socket = Stomp.Client | undefined;

export type SocketAction =
  | {
      type: "ON";
      token: string;
    }
  | {
      type: "OFF";
    };

export type SocketDispatch = Dispatch<SocketAction>;
