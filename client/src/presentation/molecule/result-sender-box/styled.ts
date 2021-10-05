import { FontSize, ElementSizeByHeight } from "utils/style/size";
import { ElementDistanceEachOthers } from "./../../../utils/style/size";
import styled from "styled-components";
import { Color } from "utils/style/color";

const ContentsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${ElementDistanceEachOthers.MEDIUM};
  width: 100%;
`;

const Label = styled.span`
  display: block;
  font-size: ${FontSize.SMALL_MEDIUM};
  margin-bottom: ${ElementDistanceEachOthers.MEDIUM};
  font-weight: bold;
  color: #111111;
`;

const Text = styled.span`
  padding: ${ElementDistanceEachOthers.SMALL};
  margin-left: ${ElementDistanceEachOthers.EXTRA_SMALL};
  border-left: 3px solid ${Color.MAIN_COLOR};
  display: block;
  font-size: ${FontSize.SMALL};
`;

const TextArea = styled.textarea.attrs({
  placeholder: "...",
})`
  min-height: 260px;
  padding: 0.75rem;
  overflow-y: auto;
  resize: vertical;
  width: 100%;
  font-size: ${FontSize.SMALL};
  font-weight: normal;
  border: 1px solid #dddddd;
  border-radius: 1px;
  background-color: white;
`;

const Footer = styled.section`
  padding: ${ElementDistanceEachOthers.MEDIUM};
  display: flex;
  justify-content: flex-end;
  height: auto;
  width: 100%;
`;

const Button = styled.button`
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

export default { ContentsWrapper, Label, TextArea, Text, Footer, Button };
