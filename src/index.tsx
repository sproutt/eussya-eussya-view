import React from "react";
import ReactDOM from "react-dom";
import App from "./presentation/application";
import * as serviceWorker from "./service-worker";
import "./index.scss";
import { AuthContextProvider } from "context-api/context/auth-context";

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
