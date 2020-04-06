import * as React from "react";
import { OAuthButton } from "presentation/molecule/oauth-button";
import styled from "./styled";
import { Link, useHistory } from "react-router-dom";
import { InputWithIcon } from "presentation/molecule/input-with-icon";
import { Size } from "utils/style/size";
import google from "assets/google-g-logo.svg";
import github from "assets/github-mark.png";
import facebook from "assets/facebook-f-logo.svg";
import { UserAction } from "enum/user-action";
import { Validator } from "utils/validator";
import { ValidationText } from "enum/validation-text";

export const LoginIfo: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = React.useState<string | undefined>(undefined);
  const [isCorrectEmail, setIsCorrectEmail] = React.useState<
    boolean | undefined
  >(undefined);

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const continueLoginWithEmail = () => {
    history.push(`then/${email}`);
  };

  return (
    <>
      <InputWithIcon
        size={Size.MEDIUM}
        name={"email"}
        value={email}
        onChange={changeValue}
        validator={Validator.correctEmailFormat}
        validationText={ValidationText.EMAIL_FORMAT_IS_WRONG}
        setOn={setIsCorrectEmail}
      />
      <styled.EmailLogin>
        <Link to="/signUp">
          <styled.SignUpLink>계정 만들기</styled.SignUpLink>
        </Link>
        <styled.NextButton
          disabled={!isCorrectEmail}
          onClick={continueLoginWithEmail}
        >
          다음
        </styled.NextButton>
      </styled.EmailLogin>
      <styled.Division>
        <hr></hr> <span>또는</span> <hr></hr>
      </styled.Division>
      <OAuthButton
        icon={google}
        name="Google"
        actions={UserAction.SIGN_IN}
      ></OAuthButton>
      <OAuthButton
        icon={facebook}
        name="Facebook"
        actions={UserAction.SIGN_IN}
      ></OAuthButton>
      <OAuthButton
        icon={github}
        name="Github"
        actions={UserAction.SIGN_IN}
      ></OAuthButton>
    </>
  );
};
