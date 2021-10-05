import React from "react";
import ReactDOM from "react-dom";
import App from "./presentation/application";
import "./index.scss";
import { AuthContextProvider } from "context-api/context/auth-context";

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);
