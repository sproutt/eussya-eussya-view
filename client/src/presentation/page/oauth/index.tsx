import { Application } from "context-instance";
import { OAuthUrl } from "enum/oauth-url";
import React, { useEffect } from "react";
import { Redirect, useLocation, useParams } from "react-router";
import { Parser } from "utils/parser";
export const OAuth: React.FC = () => {
  const {platform} = useParams<{ platform: string }>();
  const location = useLocation();

  useEffect(() => {
    let code = new URLSearchParams(location.search).get("code") as string;
    window.location.href = `${process.env.REACT_APP_HOST}/login/oauth2/code/${platform}?code=${code}`
  });
  
  return <div>잠시만 기다려주세요...</div>;
};
