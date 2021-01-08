import { Application } from "context-instance";
import { OAuthUrl } from "enum/oauth-url";
import React, { useEffect } from "react";
import { Redirect, useLocation, useParams } from "react-router";
import { Parser } from "utils/parser";
export const OAuth: React.FC = () => {
  const params = useParams<{ platform: string }>();
  const location = useLocation();

  useEffect(() => {
    (async function () {
      Application.services.oauth.authorize(
        params.platform,
        new URLSearchParams(location.search).get("code") as string
      );
    })();
  });
  return <div>잠시만 기다려주세요...</div>;
};
