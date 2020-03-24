import * as React from "react";
import { InputWithIcon } from "presentation/molecule/input-with-icon";
import { Size } from "utils/style/size";
import styled from "./styled";
import { Validator } from "utils/validator";
import { ValidationText } from "enum/validation-text";
import { Application } from "context-instance";
import { useHistory } from "react-router-dom";

export const SignUp: React.FC = () => {
  const histoey = useHistory();
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
        isCorrectRepassword
    );
  }, [
    isCorrectEmail,
    isCorrectNickName,
    isCorrectPassword,
    isCorrectRepassword
  ]);

  const signUp = async () => {
    const result = await Application.services.member.signUp(
      email!,
      nickName!,
      password!
    );
    if (result) histoey.push("/codecheck");
  };

  return (
    <styled.SignUpBox>
      <InputWithIcon
        size={Size.MEDIUM}
        name="이메일"
        value={email}
        onChange={changeValue(setEmail)}
        validator={Validator.correctEmailFormat}
        validationText={ValidationText.EMAIL_FORMAT_IS_WRONG}
        setOn={setIsCorrectEmail}
      ></InputWithIcon>
      <InputWithIcon
        size={Size.MEDIUM}
        name="별명(10자 이내)"
        value={nickName}
        onChange={changeValue(setNickName)}
        validator={Validator.correctNickNameFormat}
        validationText={ValidationText.NICK_NAME_IS_WRONG}
        setOn={setIsCorrectNickName}
      ></InputWithIcon>
      <InputWithIcon
        size={Size.MEDIUM}
        name="비밀번호(영문 숫자 특수문자 2가지 이상을 포함한 6~15자 이내)"
        type="password"
        value={password}
        onChange={changeValue(setPassword)}
        validator={Validator.correctPasswordFormat}
        validationText={ValidationText.PASSWORD_FORMAT_IS_WRONG}
        setOn={setIsCorrectPassword}
      ></InputWithIcon>
      <InputWithIcon
        size={Size.MEDIUM}
        name="비밀번호 확인"
        type="password"
        value={repassword}
        onChange={changeValue(setRepassword)}
        validator={Validator.isSamePassword(password)}
        validationText={ValidationText.REPASSWORD_IS_NOT_SAME}
        setOn={setIsCorrectRepassword}
      ></InputWithIcon>
      <styled.SignUpButton disabled={!buttonOn} onClick={signUp}>
        가입하기
      </styled.SignUpButton>
    </styled.SignUpBox>
  );
};
