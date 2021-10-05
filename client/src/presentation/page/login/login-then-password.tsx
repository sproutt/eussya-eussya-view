import * as React from "react";
import { InputWithIcon } from "presentation/molecule/input-with-icon";
import { Size } from "utils/style/size";
import { useParams, useHistory, useLocation } from "react-router-dom";
import styled from "./styled";
import { Application } from "context-instance";
import { useAuthDispatch } from "context-api/context/auth-context";
import event from "lib/key-evnet/event";
import { AuthErrorMessage } from "enum/auth-error-message";
import ResultModalEvent from "lib/result-modal-event";
import CheckModal from "presentation/molecule/check-modal";
import { AuthErrorCode } from "enum/auth-error-code";

interface LocationState {
  from: {
    pathname: string;
  };
}

export const LoginThenPassword: React.FC = () => {
  const param = useParams<{ email: string }>();
  const history = useHistory();

  const location = useLocation<LocationState>();
  let { from } = location.state || { from: { pathname: "/" } };
  const email = param.email;
  const authDispatch = useAuthDispatch();
  const [password, setPassword] = React.useState<string | undefined>(undefined);
  const changePasswordValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const [resultModalOnoff, setResultModalOnoff] = React.useState<0 | 1>(0);
  const [resultModalTitle, setResultModalTitle] = React.useState<
    string | undefined
  >(undefined);
  const [resultModalAction, setResultModalAction] = React.useState<
    string | undefined
  >(undefined);
  const [resultModalText, setResultModalText] = React.useState<
    string | undefined
  >(undefined);

  const changeResultModalOnoff = (value: any) => {
    setResultModalOnoff(value);
  };

  const resultModalEvent = new ResultModalEvent(setResultModalOnoff);

  const login = async () => {
    if (!password) return alert("패스워드를 입력해주세요.");
    try {
      const result = await Application.services.member.login(email, password);
      if (result.ok) {
        authDispatch({ type: "LOGIN" });
        return history.push(from);
      }
      setResultModalText(result.message);
      resultModalEvent.addClickOutSideEvent();
      setResultModalTitle("로그인에 실패하였습니다.");
      setResultModalAction(AuthErrorCode.NOT_USER);
      setResultModalOnoff(1);
      return;
    } catch (error) {}
  };

  const actionReducer = async (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    event.preventDefault();
    switch (resultModalAction) {
      case AuthErrorCode.NOT_USER:
        resultModalEvent.removeClickOutSideEvent(event);
        return setResultModalOnoff(0);
      default:
        resultModalEvent.removeClickOutSideEvent(event);
        return setResultModalOnoff(0);
    }
  };

  return (
    <>
      <InputWithIcon
        size={Size.MEDIUM}
        auto={true}
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
      <CheckModal
        onOff={resultModalOnoff}
        setOnoff={changeResultModalOnoff}
        title={resultModalTitle}
        action={actionReducer}
        closeCheckModal={resultModalEvent.removeClickOutSideEvent}
      >
        {resultModalText}
      </CheckModal>
    </>
  );
};
