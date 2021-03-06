import * as React from "react";
import { InputWithIcon } from "presentation/molecule/input-with-icon";
import { Size } from "utils/style/size";
import styled from "./styled";
import { Validator } from "utils/validator";
import { ValidationText } from "enum/validation-text";
import { Application } from "context-instance";
import { useHistory } from "react-router-dom";
import event from "lib/key-evnet/event";

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
    action: React.Dispatch<React.SetStateAction<string | undefined>>,
    allowKorean: boolean = true
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

  const signUp = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setButtonOn(true);
    const result = await Application.services.member.signUp(
      email!,
      nickName!,
      password!
    );
    setButtonOn(false);
    if (result) history.push(`/`);
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
    <styled.Container>
      <styled.SignUpBox>
        <h1>회원가입</h1>
        <InputWithIcon
          auto={true}
          size={Size.MEDIUM}
          name="이메일"
          value={email}
          type="email"
          autoComplete="email"
          onChange={changeValue(setEmail)}
          validator={Validator.correctEmailFormat}
          validationText={ValidationText.EMAIL_FORMAT_IS_WRONG}
          onKeyUp={event.enterEvent(
            buttonOn !== undefined && buttonOn!,
            signUp
          )}
          setOn={setIsCorrectEmail}
          onBlur={checkDuplicateOfEmail}
          isDuplicatedValue={isDupllcatedEmail}
          duplicatedText={ValidationText.DUPLICATED_EMAIL}
        ></InputWithIcon>
        <InputWithIcon
          size={Size.MEDIUM}
          name="별명(10자 이내)"
          value={nickName}
          autoComplete={"username"}
          onChange={changeValue(setNickName)}
          validator={Validator.correctNickNameFormat}
          validationText={ValidationText.NICK_NAME_IS_WRONG}
          onKeyUp={event.enterEvent(
            buttonOn !== undefined && buttonOn!,
            signUp
          )}
          setOn={setIsCorrectNickName}
          onBlur={checkDuplicateOfNickName}
          isDuplicatedValue={isDupllcatedNickName}
          duplicatedText={ValidationText.DUPLICATED_NICK_NAME}
        ></InputWithIcon>
        <InputWithIcon
          size={Size.MEDIUM}
          name="비밀번호(영문,숫자,특수문자 2가지 이상 포함한 6~15자 이내)"
          type="password"
          value={password}
          autoComplete={"new-password"}
          onChange={changeValue(setPassword)}
          validator={Validator.correctPasswordFormat}
          onKeyUp={event.enterEvent(
            buttonOn !== undefined && buttonOn!,
            signUp
          )}
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
          onKeyUp={event.enterEvent(
            buttonOn !== undefined && buttonOn!,
            signUp
          )}
          validationText={ValidationText.REPASSWORD_IS_NOT_SAME}
          setOn={setIsCorrectRepassword}
        ></InputWithIcon>
        <styled.SignUpButton
          disabled={!buttonOn}
          type={"button"}
          onClick={signUp}
        >
          가입하기
        </styled.SignUpButton>
      </styled.SignUpBox>
    </styled.Container>
  );
};
