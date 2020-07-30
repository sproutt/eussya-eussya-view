import { Socket, SocketAction } from "context-api/action/socket-action";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

const socketReducer = (
  state: Socket,
  action: SocketAction
): Socket | undefined => {
  switch (action.type) {
    case "ON":
      if (state !== undefined) return state;
      let stompClient: Stomp.Client = Stomp.over(
        new SockJS(process.env.REACT_APP_SOCKET_HOST! + "/chatting")
      );
      stompClient.connect({}, () => {
        stompClient.subscribe("/subscribe/members", () => {});
        stompClient.send(
          "/publish/members",
          {},
          JSON.stringify({ token: action.token })
        );
      });
      return stompClient;
    case "OFF":
      state?.disconnect(() => console.log("disConnected"));
      return undefined;
    default:
      return undefined;
  }
};

export default socketReducer;
