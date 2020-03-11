import React, { Fragment } from "react";
import { Login } from "./component/login";
import Logo from "../assets/uthyauthya-gb.svg";
import "./application.scss";

function App() {
  return (
    <Fragment>
      <header className="App-header">
        <img src={Logo} alt={"으쌰으쌰"} />
      </header>
      <section id="main-section">
        <Login></Login>
      </section>
    </Fragment>
  );
}

export default App;
