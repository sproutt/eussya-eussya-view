import * as React from "react";
import { InputWithIcon } from "presentation/molecule/input-with-icon";
import styled from "./styled";
import { Application } from "context-instance";
import { useHistory } from "react-router-dom";

export const SignUp: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = React.useState<string | undefined>(undefined);
  const [nickName, setNickName] = React.useState<string | undefined>(undefined);
  const [password, setPassword] = React.useState<string | undefined>(undefined);
  const [repassword, setRepassword] = React.useState<string | undefined>(
    undefined
  );
  const [isCorrectEmail, setIsCorrectEmail] = React.useState<
    boolean | undefined
  >(undefined);
  const [isCorrectNickName, setIsCorrectNickName] = React.useState<
    boolean | undefined
  >(undefined);
  const [isCorrectPassword, setIsCorrectPassword] = React.useState<
    boolean | undefined
  >(undefined);
  const [isCorrectRepassword, setIsCorrectRepassword] = React.useState<
    boolean | undefined
  >(undefined);
  const [buttonOn, setButtonOn] = React.useState<boolean | undefined>(
    undefined
  );
  const [isDupllcatedEmail, setIsDupliactedEmail] = React.useState<
    boolean | undefined
  >(undefined);
  const [isDupllcatedNickName, setIsDupliactedNickName] = React.useState<
    boolean | undefined
  >(undefined);

  const changeValue = (
    action: React.Dispatch<React.SetStateAction<string | undefined>>
  ) => (event: React.ChangeEvent<HTMLInputElement>) => {
    action(event.target.value);
  };

  React.useEffect(() => {
    setButtonOn(
      isCorrectEmail &&
        isCorrectNickName &&
        isCorrectPassword &&
        isCorrectRepassword &&
        isDupllcatedEmail &&
        isDupllcatedNickName
    );
  }, [
    isCorrectEmail,
    isCorrectNickName,
    isCorrectPassword,
    isCorrectRepassword,
    isDupllcatedEmail,
    isDupllcatedNickName,
  ]);

  const signUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setButtonOn(true);
    const result = await Application.services.member.signUp(
      email!,
      nickName!,
      password!
    );
    setButtonOn(false);
    if (result) history.push(`/codecheck/${email}`);
  };

  const checkDuplicateOfEmail = async () => {
    if (email === undefined) return setIsDupliactedEmail(false);
    const result = await Application.services.member.checkDuplicateOfEmail(
      email
    );
    setIsDupliactedEmail(result);
  };

  const checkDuplicateOfNickName = async () => {
    if (nickName === undefined) return setIsDupliactedNickName(false);
    const result = await Application.services.member.checkDuplicateOfNickName(
      nickName
    );
    setIsDupliactedNickName(result);
  };

  return (
    <styled.SignUpBox onSubmit={signUp}>
      <InputWithIcon
        name="이메일"
        value={email}
        type="email"
        autoComplete="email"
        onChange={changeValue(setEmail)}
      ></InputWithIcon>
      <InputWithIcon
        name="별명(10자 이내)"
        value={nickName}
        autoComplete={"username"}
        onChange={changeValue(setNickName)}
      ></InputWithIcon>
      <InputWithIcon
        name="비밀번호(영문 숫자 특수문자 2가지 이상을 포함한 6~15자 이내)"
        type="password"
        value={password}
        autoComplete={"new-password"}
        onChange={changeValue(setPassword)}
      ></InputWithIcon>
      <InputWithIcon
        name="비밀번호 확인"
        type="password"
        value={repassword}
        onChange={changeValue(setRepassword)}
      ></InputWithIcon>
      <styled.SignUpButton disabled={!buttonOn} type={"submit"}>
        가입하기
      </styled.SignUpButton>
    </styled.SignUpBox>
  );
};
