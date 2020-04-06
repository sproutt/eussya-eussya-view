import * as React from "react";
import { RoundButton } from "presentation/atom/button/round-button";
import { UserAction } from "enum/user-action";
import "./oauth-button.scss";
import { OAuthUrl } from "enum/oauth-url";

export const OAuthButton: React.FC<propTypes> = ({
  icon,
  name,
  actions,
  href,
  clientId,
  redirectUri,
}) => {
  const onClick = () => {
    if (href && clientId && redirectUri)
      // eslint-disable-next-line no-restricted-globals
      location.href = `${href}?client_id=${clientId}&redirect_uri=${
        process.env.REACT_APP_DOMAIN + redirectUri + "/" + name.toLowerCase()
      }`;
  };
  return (
    <RoundButton className="oauth-button" onClick={onClick}>
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
  href?: OAuthUrl;
  clientId?: string;
  redirectUri?: string;
};
