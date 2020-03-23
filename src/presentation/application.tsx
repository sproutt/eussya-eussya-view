import React from "react";
import { Login } from "./component/login";
import { SignUp } from "./page/sign-up";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logo from "../assets/uthyauthya-gb.svg";
import "./application.scss";

function App() {
  return (
    <Router>
      <header className="App-header">
        <img src={Logo} alt={"으쌰으쌰"} />
      </header>
      <section id="main-section">
        <Switch>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/">
            <Login></Login>
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App;
