import React, { Fragment } from "react";
import { SignUpCheck } from "presentation/page/sign-up-check";
import Logo from "../assets/uthyauthya-gb.svg";
import "./application.scss";

function App() {
  return (
    <Fragment>
      <header className="App-header">
        <img src={Logo} alt={"으쌰으쌰"} />
      </header>
      <section id="main-section">
        <SignUpCheck></SignUpCheck>
      </section>
    </Fragment>
  );
}

export default App;
