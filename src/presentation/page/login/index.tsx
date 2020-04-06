import * as React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "./styled";
import { LoginIfo } from "./login-info";
import { LoginThenPassword } from "./login-then-password";

export const Login: React.FC = () => {
  return (
    <styled.LoginBox>
      <h1>Login</h1>
      <Switch>
        <Route path="/then/:email">
          <LoginThenPassword></LoginThenPassword>
        </Route>
        <Route path="/">
          <LoginIfo></LoginIfo>
        </Route>
      </Switch>
    </styled.LoginBox>
  );
};
