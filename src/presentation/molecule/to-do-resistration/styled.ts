import { Color } from "utils/style/color";
import styled from "styled-components";
import {
  ElementSizeByHeight,
  ElementDistanceEachOthers,
  FontSize,
} from "utils/style/size";

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

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${ElementDistanceEachOthers.MEDIUM};
`;

const RowBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${ElementDistanceEachOthers.MEDIUM};
`;

const NoPaddingBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: ${ElementDistanceEachOthers.MEDIUM};
`;

const InputLabel = styled.label`
  display: inline-block;
  padding: 1px;
  margin-bottom: ${ElementDistanceEachOthers.MEDIUM};
  font-size: ${FontSize.SMALL};
  font-weight: 600;
`;

const Label = styled.label`
  display: inline-block;
  padding: 1px;
  font-size: ${FontSize.SMALL};
  font-weight: 600;
  margin-right: ${ElementDistanceEachOthers.MEDIUM};
`;

const Input = styled.input.attrs({
  placeholder: "미션의 제목을 작성해주세요",
})`
  width: 100%;
  height: ${ElementSizeByHeight.MEDIUM_SMALL};
  border: 1px solid #dddddd;
  border-radius: 1px;
  background-color: white;
  padding: 0.75rem;
  font-size: ${FontSize.SMALL};
  font-weight: normal;
`;

const MissionTextArea = styled.textarea.attrs({
  placeholder: "...",
})`
  min-height: 260px;
  resize: vertical;
  padding: 0.75rem;
  overflow-y: auto;
  width: 100%;
  font-size: ${FontSize.SMALL};
  font-weight: normal;
  border: 1px solid #dddddd;
  border-radius: 1px;
  background-color: white;
`;

const SubimtButton = styled.button`
  flex: 0 0 auto;
  height: ${ElementSizeByHeight.MEDIUM_SMALL};
  font-size: ${FontSize.SMALL_MEDIUM};
  letter-spacing: 1px;
  cursor: pointer;
  font-weight: 400;
  background-color: ${Color.MAIN_COLOR};
  color: white;
  border: none;
  border-radius: 1px;
  width: 10rem;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

type ModalProps = {
  on?: any;
};

export default {
  Modal,
  ModalContent,
  ModalLayout,
  TitleBox,
  InputLabel,
  Input,
  MissionTextArea,
  SubimtButton,
  NoPaddingBox,
  Footer,
  RowBox,
  Label,
};
