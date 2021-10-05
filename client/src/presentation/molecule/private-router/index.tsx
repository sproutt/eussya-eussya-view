import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAuth } from "context-api/context/auth-context";

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isLogined ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
