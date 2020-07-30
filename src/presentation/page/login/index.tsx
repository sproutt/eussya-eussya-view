import * as React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "./styled";
import { LoginIfo } from "./login-info";
import { LoginThenPassword } from "./login-then-password";

export const Login: React.FC = () => {
  return (
    <styled.Container>
      <styled.LoginBox>
        <h1>Login</h1>
        <Switch>
          <Route path="/login/then/:email">
            <LoginThenPassword></LoginThenPassword>
          </Route>
          <Route exact path="/login">
            <LoginIfo></LoginIfo>
          </Route>
        </Switch>
      </styled.LoginBox>
    </styled.Container>
  );
};
