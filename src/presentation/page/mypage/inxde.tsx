import React from "react";
import styled from "./styled";
import gridStyle from "assets/style/grid";
import facebook from "assets/f_logo_RGB-White_72.png";
import github from "assets/GitHub-Mark-64px.png";
import "./mypage.scss";

const MyPage: React.FC = () => {
  return (
    <React.Fragment>
      <gridStyle.Container>
        <styled.MyBox className="c-mypage">
          <h1 className="c-mypage__title">마이 페이지</h1>
          <ul className="l-info">
            <li>
              <h2 className="l-info__title">이름</h2>
              <span className="l-info__contents">이름이름</span>
              <span className="l-info__text">변경하기</span>
            </li>
            <li>
              <h2 className="l-info__title">이메일</h2>
              <span className="l-info__contents">이메일이메일</span>
              <span className="l-info__text">변경하기</span>
            </li>
            <li>
              <h2 className="l-info__title">비밀번호</h2>
              <span className="l-info__contents">******</span>
              <span className="l-info__text">변경하기</span>
            </li>
            <li>
              <h2 className="l-info__title">소셜 로그인</h2>
              <ul className="l-info__contents__list">
                <li>
                  <div className="btn c-oauth">
                    <div className="c-oauth__image">
                      <svg
                        width="18"
                        height="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="#000" fillRule="evenodd">
                          <path
                            d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
                            fill="#EA4335"
                          />
                          <path
                            d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
                            fill="#4285F4"
                          />
                          <path
                            d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
                            fill="#34A853"
                          />
                          <path fill="none" d="M0 0h18v18H0z" />
                        </g>
                      </svg>
                    </div>
                    <span className="c-oauth__text">구글 연동하기</span>
                  </div>
                </li>
                <li>
                  <div className="btn c-oauth facebook">
                    <img
                      className="c-oauth__image--facebook"
                      src={facebook}
                      alt={"facebook"}
                    ></img>
                    <span className="c-oauth__text">페이스북 연동하기</span>
                  </div>
                </li>
                <li>
                  <div className="btn c-oauth github">
                    <img
                      className="c-oauth__image--github"
                      src={github}
                      alt={"github"}
                    ></img>
                    <span className="c-oauth__text">깃허브 연결하기</span>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </styled.MyBox>
      </gridStyle.Container>
    </React.Fragment>
  );
};

export default MyPage;
