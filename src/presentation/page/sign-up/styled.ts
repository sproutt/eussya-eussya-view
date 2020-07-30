import styled from "styled-components";
import {
  ElementSizeByHeight,
  ElementDistanceEachOthers,
  FontSize,
} from "utils/style/size";
import { Color } from "utils/style/color";
const SignUpBox = styled.form`
  margin-top: ${ElementDistanceEachOthers.LARGE};
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 5/9;

  h1 {
    font-size: ${FontSize.EXTRA_LARGE};
    font-weight: bolder;
    color: #000000;
    margin-bottom: ${ElementDistanceEachOthers.LARGE};
  }

  @media screen and (min-width: 1920px) {
    grid-column: 6/10;
  }
  @media screen and (min-width: 1024px) and (max-width: 1344px) {
  }
  @media screen and (min-width: 720px) and (max-width: 1024px) {
    grid-column: 4/10;
    padding: 0 20px;
  }
  @media screen and (max-width: 720px) {
    grid-column: 1/7;
    padding: 0 20px;
  }
`;

const SignUpButton = styled.button`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  height: ${ElementSizeByHeight.MEDIUM_LARGE};
  margin: ${ElementDistanceEachOthers.LARGE} 0;
  border: none;
  border-radius: 5px;
  font-size: ${FontSize.MEDIUM};
  font-weight: bold;
  background-color: ${Color.MAIN_COLOR};
  color: white;
  :focus {
    outline: none;
  }
  :disabled {
    color: white;
    background-color: ${Color.DISABLED_COLOR};
  }
`;

const Container = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
  width: 100%;
  height: auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media screen and (min-width: 1920px) {
    grid-template-columns: repeat(14, 1fr);
  }
  @media screen and (min-width: 1024px) and (max-width: 1344px) {
    grid-column-gap: 16px;
  }
  @media screen and (min-width: 720px) and (max-width: 1024px) {
    grid-column-gap: 12px;
    padding: 0;
  }
  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 8px;
    padding: 0;
  }
`;

export default { SignUpBox, SignUpButton, Container };
