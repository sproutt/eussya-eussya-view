import React, { Fragment } from "react";
import "./login.scss";

export const Login: React.FC = () => {
  return (
    <section id="login">
      <h1>Login</h1>
      <input type="email" placeholder="이메일" />
      <article id="email-login">
        <span>계정 만들기</span>
        <button>다음</button>
      </article>
      <article id="division">
        <hr></hr> <span>또는</span> <hr></hr>
      </article>
      <button className="OAuth-button">구글</button>
      <button className="OAuth-button">페이스북</button>
      <button className="OAuth-button">깃허브</button>
    </section>
  );
};
