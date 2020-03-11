import * as React from "react";
import { RoundButton } from "presentation/atom/button/round-button";
import { UserAction } from "enum/user-action";
import "./oauth-button.scss";
export const OAuthButton: React.FC<propTypes> = ({ icon, name, actions }) => {
  return (
    <RoundButton className="oauth-button">
      <img src={icon} alt={name}></img>
      <span>
        {actions === UserAction.SIGN_IN ? "Sign in" : "Sign up"} with {name}
      </span>
    </RoundButton>
  );
};

type propTypes = {
  icon: string;
  name: string;
  actions: UserAction;
};
