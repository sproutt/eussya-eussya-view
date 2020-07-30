import styled from "styled-components";
import { Color } from "utils/style/color";
import { FontSize, ElementDistanceEachOthers } from "utils/style/size";
import globalStyled from "utils/style/default";

const Container = styled.section`
  width: 100%;

  display: flex;
  height: auto;
  align-items: center;
  justify-content: center;
`;

const LoginBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 24rem;
  height: auto;
  margin-top: ${ElementDistanceEachOthers.LARGE};

  h1 {
    font-size: ${FontSize.EXTRA_LARGE};
    font-weight: bolder;
    color: #000000;
    margin-bottom: ${ElementDistanceEachOthers.LARGE};
  }
`;

const EmailLogin = styled.article`
  width: 24rem;
  display: flex;
  justify-content: space-between;
  margin: ${ElementDistanceEachOthers.SMALL} 0;
`;

const SignUpLink = styled.span`
  display: inline-block;
  color: ${Color.MAIN_COLOR};
  font-size: ${FontSize.MEDIUM_SMALL};
  line-height: 2.5rem;
`;

const NextButton = styled.button`
  ${globalStyled.RemoveDefaultButton}
  width: 5rem;
  height: 2.5rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: ${FontSize.MEDIUM_SMALL};
  background-color: ${Color.MAIN_COLOR};
  :disabled {
    cursor: default;
    color: white;
    background-color: ${Color.DISABLED_COLOR};
  }

  &:active,
  &:hover {
    outline: none;
  }
`;

const Division = styled.article`
  width: 24rem;
  display: flex;
  align-items: center;
margin: ${ElementDistanceEachOthers.SMALL} 0;
  hr {
    ${globalStyled.clearDistanceBorder}
    flex-grow: 1;
    height: 2px;
    background-color: ${Color.MAIN_COLOR};
  }

  span {
    ${globalStyled.clearDistanceBorder}
    color: ${Color.MAIN_COLOR};
    padding: ${ElementDistanceEachOthers.LARGE};
    font-size: ${FontSize.SMALL};
    font-weight: bold;
  }
`;

export default {
  EmailLogin,
  SignUpLink,
  NextButton,
  Division,
  LoginBox,
  Container,
};
