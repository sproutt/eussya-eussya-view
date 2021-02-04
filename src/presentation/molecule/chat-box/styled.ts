import { Color } from "./../../../utils/style/color";
import { ElementSizeByHeight, FontSize } from "./../../../utils/style/size";
import styled from "styled-components";
import { ElementDistanceEachOthers } from "utils/style/size";

const Wrapper = styled.section`
  height: 330px;
  width: 250px;
  transition-property: transform;
  transition-duration: 400ms;
  transform: translate3d(0px, 0px, 0px);
`;

const Layout = styled.section`
  display: flex;
  border: none;
  background-color: white;
  box-shadow: 0px -1px 20px 0px #00000020;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Header = styled.section`
  width: 100%;
  background-color: ${Color.MAIN_COLOR};
  color: white;
  text-align: center;
  padding: ${ElementDistanceEachOthers.SMALL};
  height: ${ElementSizeByHeight.MEDIUM_SMALL};
  box-shadow: 0px 1px 5px 1px #00000050;
`;

const Container = styled.section`
  width: 100%;
  padding: ${ElementDistanceEachOthers.SMALL};
  height: 100%;
  overflow: scroll;
`;

const Footer = styled.section`
  width: 100%;
  padding: ${ElementDistanceEachOthers.SMALL};
  height: auto;
  display: flex;
`;

const ChatInput = styled.textarea`
  resize: none;
  border: none;
  font: inherit;
  width: 75%;
  font-size: ${FontSize.MEDIUM_SMALL};
  background-color: #dddddd;
  border-radius: ${FontSize.SMALL_MEDIUM};
  transition-property: border-radius, background-color;
  transition-duration: 400ms, 400ms;
  padding: ${ElementDistanceEachOthers.SMALL_SMALL}
    ${ElementDistanceEachOthers.MEDIUM_SMALL};

  &:active,
  &:focus {
    outline: none;
    border-radius: ${FontSize.EXTRA_SMALL};
    background-color: #eeeeee;
  }
`;

const SendButton = styled.button`
  border: none;
  font: inherit;
  width: 25%;
  border-radius: ${FontSize.SMALL_MEDIUM};
  padding: ${ElementDistanceEachOthers.SMALL_SMALL}
  ${ElementDistanceEachOthers.MEDIUM_SMALL};
  &:focus {
    outline: none;
    border-radius: ${FontSize.EXTRA_SMALL};
    background-color: #eeeeee;
  }
`;

export default { Wrapper, Layout, Header, Container, Footer, ChatInput, SendButton };
