import { Application } from "context-instance";
import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

export const OAuthProcess: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    let accessToken = new URLSearchParams(location.search).get(
      "accessToken"
    ) as string;
    let refreshToken = new URLSearchParams(location.search).get(
      "refreshToken"
    ) as string;
    Application.services.member.setOAuthToken(accessToken, refreshToken);
    history.push("/");
  });

  return <div></div>;
};
