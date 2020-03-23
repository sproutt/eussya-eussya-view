import * as React from "react";
import "./login.scss";
import { OAuthButton } from "presentation/molecule/oauth-button";
import { UserAction } from "enum/user-action";
import google from "assets/google-g-logo.svg";
import github from "assets/github-mark.png";
import facebook from "assets/facebook-f-logo.svg";
import { Link } from "react-router-dom";

export const Login: React.FC = () => {
  return (
    <section id="login">
      <h1>Login</h1>
      <input type="email" placeholder="이메일" />
      <article id="email-login">
        <Link to="/signup">
          <span>계정 만들기</span>
        </Link>
        <button>다음</button>
      </article>
      <article id="division">
        <hr></hr> <span>또는</span> <hr></hr>
      </article>
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
    </section>
  );
};
