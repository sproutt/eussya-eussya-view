import styled from "styled-components";
import { FontSize, ElementDistanceEachOthers } from "utils/style/size";

const Modal = styled.div<ModalProps>`
  position: fixed;
  display: ${({ on }) => (on ? "flex" : "none")};
  justify-content: center;
  overflow-y: auto;
  z-index: 1;
  background-color: #00000090;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

const ModalContent = styled.div`
  display: flex;
  align-self: flex-start;
  width: 100%;
  height: 100%;
  max-width: 800px;
  min-height: 250px;
  pointer-events: none;
  padding: 8rem 1rem 7rem;
  margin: 0px auto;
  > * {
    pointer-events: all;
  }
`;

const ModalLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  box-shadow: 0px 3px 12px 6px #00000030;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  background-color: #fdfdfd;
  border-bottom: 1px solid #dddddd;
  padding: ${ElementDistanceEachOthers.MEDIUM};
`;

const HeaderTitle = styled.span`
  font-size: ${FontSize.SMALL};
  font-weight: 600;
  padding-right: 1rem;
  flex-grow: 1;
`;

const CloseButton = styled.span`
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

const Body = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 auto;
  background-color: #ffffff;
  padding: ${ElementDistanceEachOthers.MEDIUM};
  overflow-y: auto;
`;

type ModalProps = {
  on?: any;
};

export default {
  ModalLayout,
  ModalContent,
  Modal,
  Header,
  HeaderTitle,
  CloseButton,
  Body,
};
