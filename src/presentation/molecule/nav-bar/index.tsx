import * as React from "react";
import styled from "./styled";
import Logo from "assets/logo_1.png";
import { useAuth } from "context-api/context/auth-context";
import { useHistory } from "react-router-dom";

export const NavBar: React.FC = () => {
  const auth = useAuth();
  const history = useHistory();
  return (
    <styled.NavBar>
      <styled.NavFirstGroup>
        <styled.Logo src={Logo}></styled.Logo>
        <styled.NavButton onClick={() => history.push("/")}>
          투데이 얼또
        </styled.NavButton>
        <styled.NavButton>얼또 랭킹</styled.NavButton>
      </styled.NavFirstGroup>
      <styled.NavSecondGroup>
        {auth.isLogined ? (
          <styled.NavButton>로그아웃</styled.NavButton>
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
