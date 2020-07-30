import * as React from "react";
import styled from "./styled";
import Logo from "assets/logo_1.png";
import { useAuth } from "context-api/context/auth-context";
import { useHistory } from "react-router-dom";
import { Application } from "context-instance";

export const NavBar: React.FC = () => {
  const auth = useAuth();
  const history = useHistory();

  const logout = () => {
    let result = Application.services.member.logout();

    if (result) {
      window.location.href = "/";
    }
  };

  return (
    <styled.NavBar>
      <styled.NavFirstGroup>
        <styled.Logo src={Logo} onClick={() => history.push("/")}></styled.Logo>
        {auth.isLogined && (
          <styled.NavButton onClick={() => history.push("/dawn")}>
            투데이 얼또
          </styled.NavButton>
        )}

        <styled.NavButton>얼또 랭킹</styled.NavButton>
      </styled.NavFirstGroup>
      <styled.NavSecondGroup>
        {auth.isLogined ? (
          <styled.NavButton onClick={logout}>로그아웃</styled.NavButton>
        ) : (
          <>
            <styled.NavButton onClick={() => history.push("/login")}>
              로그인
            </styled.NavButton>
            <styled.NavClickButton onClick={() => history.push("/signup")}>
              회원가입
            </styled.NavClickButton>
          </>
        )}
      </styled.NavSecondGroup>
    </styled.NavBar>
  );
};
