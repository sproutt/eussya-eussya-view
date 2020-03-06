import React, { Fragment } from "react";
import { Login } from "./component/login";
import Logo from "../assets/uthyauthya-gb.svg";
import "./App.scss";

function App() {
  return (
    <Fragment>
      <header className="App-header">
        <img src={Logo} />
      </header>
      <section id="main-section">
        <Login></Login>
      </section>
    </Fragment>
  );
}

export default App;
