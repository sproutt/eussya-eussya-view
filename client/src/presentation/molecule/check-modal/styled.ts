import {
  ElementSizeByHeight,
  ElementDistanceEachOthers,
  FontSize,
} from "utils/style/size";
import styled from "styled-components";
import { Color } from "utils/style/color";

const ModalBackground = styled.section<{ on: 0 | 1 }>`
  position: fixed;
  display: ${({ on }) => (on === 1 ? "flex" : "none")};
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 998;
  background-color: #00000080;
`;

const Modal = styled.section<{ on: 0 | 1 }>`
  position: absolute;
  display: ${({ on }) => (on === 1 ? "flex" : "none")};
  flex-direction: column;
  pointer-events: all;
  width: calc(200px * 1.41);
  height: 200px;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 2px;
  box-shadow: 0 3px 6px 3px #00000020;
`;

const Header = styled.header`
  display: flex;
  padding: ${ElementDistanceEachOthers.MEDIUM};
  width: 100%;
  flex: 0 0 auto;
  border-bottom: 1px solid #dddddd;
  span {
    padding-right: 1rem;
    flex-grow: 1;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${ElementDistanceEachOthers.MEDIUM};
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1 1 auto;
  span {
    margin: ${ElementDistanceEachOthers.MEDIUM};
    font-size: ${FontSize.SMALL_MEDIUM};
    flex-grow: 1;
  }
`;

const CloseButton = styled.div`
  flex: 0 0 auto;
  display: flex;
  cursor: pointer;
  svg {
    width: ${FontSize.SMALL};
    height: ${FontSize.SMALL};
  }
  svg polygon {
    fill: #bbbbbb;
  }
`;

const Button = styled.button`
  flex: 0 0 auto;
  height: ${ElementSizeByHeight.SMALL};
  font-size: ${FontSize.SMALL_MEDIUM};
  letter-spacing: 1px;
  cursor: pointer;
  font-weight: 400;
  background-color: ${Color.MAIN_COLOR};
  color: white;
  border: none;
  border-radius: 1px;
  width: calc(${ElementSizeByHeight.SMALL} * 2);
`;

export default { Modal, Header, CloseButton, ModalBackground, Body, Button };
