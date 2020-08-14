import * as React from "react";
import { InputWithIcon } from "presentation/molecule/input-with-icon";
import { Size } from "utils/style/size";
import { useParams, useHistory } from "react-router-dom";
import styled from "./styled";
import { Application } from "context-instance";
import { useAuthDispatch } from "context-api/context/auth-context";
import event from "lib/event";

export const LoginThenPassword: React.FC = () => {
  const param = useParams<{ email: string }>();
  const history = useHistory();
  const email = param.email;
  const authDispatch = useAuthDispatch();
  const [password, setPassword] = React.useState<string | undefined>(undefined);
  const changePasswordValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const login = async () => {
    if (!password) {
      return alert("패스워드를 입력해주세요.");
    }
    const result = await Application.services.member.login(email, password);
    if (!result) {
      return alert("로그인에 실패하셨습니다.");
    }
    authDispatch({ type: "LOGIN" });
    history.push("/");
  };

  return (
    <>
      <InputWithIcon
        size={Size.MEDIUM}
        type="password"
        name="비밀번호"
        value={password}
        onChange={changePasswordValue}
        onKeyUp={event.enterEvent(
          password !== undefined && password?.length > 0,
          login
        )}
      ></InputWithIcon>
      <styled.EmailLogin>
        <styled.SignUpLink>로그인에 문제가 있으신가요?</styled.SignUpLink>
        <styled.NextButton disabled={!password} onClick={login}>
          로그인
        </styled.NextButton>
      </styled.EmailLogin>
    </>
  );
};
