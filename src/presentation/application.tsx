import React from "react";
import { SignUp } from "./page/sign-up";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./application.scss";
import { SignUpCheck } from "./page/sign-up-check";
import { Main } from "./page/main";

function App() {
  return (
    <Router>
      <section id="main-section">
        <Switch>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/codecheck/:email">
            <SignUpCheck></SignUpCheck>
          </Route>
          <Route path="/">
            <Main></Main>
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App;
