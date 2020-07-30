import React from "react";
import { SignUp } from "./page/sign-up";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./application.scss";
import { SignUpCheck } from "./page/sign-up-check";
import { Main } from "./page/main";
import { Login } from "./page/login";
import { NavBar } from "./molecule/nav-bar";
import EarlyCrazy from "./page/early-crazy";
import { useAuthDispatch } from "context-api/context/auth-context";
import { Application } from "context-instance";
import { GrassContextProvider } from "context-api/context/grass-context";

function App() {
  let authDispatch = useAuthDispatch();
  React.useEffect(() => {
    let result = Application.services.member.isLogined();
    authDispatch({ type: "CUSTOM", isLogined: result });
  }, []);

  return (
    <Router>
      <section id="main-section">
        <NavBar></NavBar>
        <Switch>
          <Route path="/dawn">
            <GrassContextProvider>
              <EarlyCrazy></EarlyCrazy>
            </GrassContextProvider>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/login">
            <Login></Login>
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
