import {
  FontSize,
  ElementDistanceEachOthers,
  ElementSizeByHeight,
} from "utils/style/size";
import styled from "styled-components";

const Banner = styled.section<{ color: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 2/3;
  grid-row: 2 / 3;
  width: 100%;
  margin: 0;
  h1 {
    font-size: ${FontSize.EXTRA_LARGE};
    margin: ${ElementDistanceEachOthers.SMALL};
  }
`;
const PopUpWrapper = styled.section`
  grid-column: 1/4;
  grid-row: 2/5;
  z-index: 1;
`;

const PopUp = styled.article`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 100px;
  background: white;
  border: 1px solid grey;
`;
const Explain = styled.article`
  box-sizing: border-box;
  background-color: #ffce3f;
  width: 100%;
  grid-column: 2/3;
  grid-row: 3/4;
`;

const Header = styled.section`
  box-sizing: border-box;
  grid-column: 1/4;
  grid-row: 1/2;
  display: flex;
  align-items: center;
  padding: ${ElementDistanceEachOthers.EXTRA_SMALL};
  background-color: black;
  width: 100%;
`;

const Logo = styled.img`
  height: 80%;
`;

const Button = styled.button`
  margin: ${ElementDistanceEachOthers.MEDIUM};
  height: ${ElementSizeByHeight.MEDIUM_LARGE};
  cursor: pointer;
  width: auto;
  padding: ${ElementDistanceEachOthers.MEDIUM};
  border: 0;
  font-size: ${FontSize.MEDIUM};
  font-weight: bold;
`;

const Container = styled.section`
  display: grid;
  grid-template-rows: 40px 360px 200px auto;
  grid-template-columns: 50px auto 50px;
  width: 100%;
  height: auto;
`;

const HeaderButton = styled.button`
  border: none;
  background-color: #00000000;
  height: ${ElementSizeByHeight.SMALL};
  font-size: ${FontSize.SMALL};
  font-weight: bold;
  margin: ${ElementDistanceEachOthers.SMALL};
  width: auto;
  color: white;
`;
export default {
  Banner,
  Header,
  Container,
  Logo,
  Button,
  Explain,
  HeaderButton,
  PopUpWrapper,
  PopUp,
};
