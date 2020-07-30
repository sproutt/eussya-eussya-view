import { Color } from "utils/style/color";
import styled, { keyframes } from "styled-components";
import {
  ElementSizeByHeight,
  ElementDistanceEachOthers,
  FontSize,
} from "utils/style/size";

const ProgressChatList = styled.ul`
  display: table-row;
  position: fixed;
  bottom: 0px;
  left: calc(10vw + ${ElementDistanceEachOthers.MEDIUM});
  margin: 0;
  padding: 0;

  li {
    display: table-cell;
    vertical-align: bottom;
  }
`;

const Main = styled.section`
  position: relative;
  display: flex;
  width: 75vw;
  flex-basis: 75%;
  flex-grow: 1;
  height: calc(100vh - ${ElementSizeByHeight.MEDIUM_MEDIUM_LARGE});
  margin: 0;
`;

const SubMain = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  margin-left: 10vw;
  width: 65vw;

  min-width: 500px;
  padding: 0 ${ElementDistanceEachOthers.MEDIUM};
  height: 100%;
`;

const blockRemove = keyframes`
    from{
      background-color: ${Color.MAIN_COLOR};
    }

    to{
      background-color: #ffffff;
    }
`;

const slideDown = keyframes`
    from{
      transform: translateY(-10%);
      max-height: 200px;
      opacity: 0;
    }

    to{
      transform: translateY(0);
      max-height: 500px;
      opacity: 1;
    }
`;

const Block = styled.section`
  background-color: #ffffff;
  margin: ${ElementDistanceEachOthers.MEDIUM_SMALL} 0;
  border-radius: 5px;
  width: 100%;
  max-height: 500px;
  overflow: hidden;
  min-width: 500px;
  animation: ${slideDown} 500ms linear;
  transition: all 500ms;

  &.remove {
    transform: translateY(-10%);
    max-height: 200px;
    opacity: 0;
    animation: ${blockRemove} 500ms linear;
  }
`;

const NoBackgroundBlock = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${ElementDistanceEachOthers.MEDIUM};
  height: 200px;
  margin: ${ElementDistanceEachOthers.MEDIUM_SMALL} 0;
  border: 4px dashed #aaaaaa;
  border-radius: 5px;
  width: 100%;
  min-width: 500px;
  animation: ${slideDown} 500ms linear;
  transition-property: transform, opacity;
  transition-duration: 700ms, 700ms;
  transition-timing-function: cubic-bezier(1, 0, 0, 1),
    cubic-bezier(0, 1, 0.64, 0.81);
  overflow: hidden;

  &.remove {
    transform: translateY(-100%);
    opacity: 0;
  }

  &:hover {
    cursor: pointer;
    background-color: #dddddd;
  }
`;

const Script = styled.span`
  font-size: ${FontSize.EXTRA_LARGE};
  color: #aaaaaa;
`;

const Side = styled.aside`
  overflow-y: auto;
  top: ${ElementSizeByHeight.MEDIUM_MEDIUM_LARGE};
  height: calc(100vh - ${ElementSizeByHeight.MEDIUM_MEDIUM_LARGE});
  padding: 0 ${ElementDistanceEachOthers.MEDIUM};
  width: 25vw;
  flex-basis: 25%;
  margin: 0;
`;

const PeopleListLabel = styled.div`
  display: flex;
  height: ${ElementSizeByHeight.MEDIUM};
  padding: ${ElementDistanceEachOthers.MEDIUM_SMALL};
  width: 100%;
  align-items: center;
`;

const PeopleListLabelName = styled.span`
  font-size: ${FontSize.MEDIUM_SMALL};
  font-weight: bold;
  color: #666666;
`;

const Container = styled.section`
  display: flex;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
  width: 100%;
  box-sizing: border-box;
`;

const Wrraper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.section`
  display: flex;
  align-items: center;
  padding: ${ElementDistanceEachOthers.MEDIUM};
  flex-grow: 0;

  & > label {
    display: inline-block;
    width: ${ElementSizeByHeight.SMALL};
    margin-right: ${ElementDistanceEachOthers.SMALL};
    font-size: ${FontSize.SMALL};
    color: #bbbbbb;
    font-weight: 600;
  }
`;

const Title = styled.span`
  display: inline-block;
  font-size: ${FontSize.LARGE};
  margin-right: ${ElementDistanceEachOthers.SMALL};
  padding-left: ${ElementDistanceEachOthers.SMALL};
  line-height: ${ElementSizeByHeight.MEDIUM_SMALL};
  height: ${ElementSizeByHeight.MEDIUM_SMALL};
  margin-right: ${ElementDistanceEachOthers.SMALL};
  border-bottom: 1px solid #dddddd;
  flex-grow: 1;
`;

const TitleInput = styled.input`
  font-size: ${FontSize.MEDIUM};
  margin-right: ${ElementDistanceEachOthers.SMALL};
  padding-left: ${ElementDistanceEachOthers.SMALL};
  line-height: ${ElementSizeByHeight.SMALL};
  height: ${ElementSizeByHeight.MEDIUM_SMALL};
  border: none;
  border-bottom: 1px solid #aaaaaa;
  flex-grow: 1;
  &:focus {
    outline: none;
    border: none;
    border-bottom: 2px solid ${Color.MAIN_COLOR};
  }
`;

const Text = styled.span`
  display: inline-block;
  white-space: pre;
  font-size: ${FontSize.SMALL_MEDIUM};
  margin-right: ${ElementDistanceEachOthers.SMALL};
  padding-left: ${ElementDistanceEachOthers.EXTRA_SMALL};
  min-height: 100px;
  width: 100%;
`;

const TextArea = styled.textarea`
  font-size: ${FontSize.SMALL_MEDIUM};
  margin-right: ${ElementDistanceEachOthers.SMALL};
  padding: ${ElementDistanceEachOthers.EXTRA_SMALL};
  min-height: 200px;
  border: none;
  resize: none;
  width: 100%;
`;

const ButtonBox = styled.div<{ mode?: number; disabled?: number }>`
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: ${ElementDistanceEachOthers.SMALL};
  margin: 0 ${ElementDistanceEachOthers.SMALL};
  border-radius: 10px;

  &:hover {
    background-color: ${({ disabled }) =>
      disabled === 1 ? "none" : Color.MAIN_COLOR + 50};
  }

  & svg {
    height: 1.5rem;
  }

  & svg .cls-1 {
    fill: ${({ mode }) => (mode === 1 ? Color.MAIN_COLOR : "#000000")};
  }
`;

const Body = styled.section`
  display: flex;
  padding: ${ElementDistanceEachOthers.MEDIUM};
  flex-grow: 1;
  height: auto;

  & > label {
    display: inline-block;
    width: ${ElementSizeByHeight.SMALL};
    margin-right: ${ElementDistanceEachOthers.SMALL};
    font-size: ${FontSize.SMALL};
    color: #bbbbbb;
    font-weight: 600;
  }
`;

const Footer = styled.section`
  border-top: 10px solid #f0f1f2;
  padding: ${ElementDistanceEachOthers.MEDIUM};
  height: auto;
  display: flex;
`;

const Label = styled.label`
  display: inline-block;
  font-size: ${FontSize.SMALL};
  margin-bottom: ${ElementDistanceEachOthers.SMALL};
`;

const TimeLabel = styled.label`
  display: inline-block;
  font-size: ${FontSize.MEDIUM_SMALL};
`;

const LabelBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Button = styled.button`
  background-color: white;
  border: 1px solid ${Color.MAIN_COLOR};
  height: ${ElementSizeByHeight.SMALL};
  line-height: ${ElementSizeByHeight.SMALL};
  cursor: pointer;
  font-size: ${FontSize.MEDIUM};
  padding: 0;
  width: calc(${ElementSizeByHeight.MEDIUM_SMALL} * 2);
  margin-right: ${ElementDistanceEachOthers.SMALL_MEDIUM};

  &:hover {
    background-color: ${Color.MAIN_COLOR};
    color: white;
  }

  &:focus {
    outline: none;
  }
`;

export default {
  Container,
  Main,
  Side,
  SubMain,
  Block,
  Wrraper,
  Header,
  Body,
  ButtonBox,
  Title,
  TitleInput,
  TextArea,
  Text,
  Footer,
  Label,
  TimeLabel,
  LabelBlock,
  Button,
  PeopleListLabel,
  PeopleListLabelName,
  ProgressChatList,
  NoBackgroundBlock,
  Script,
};
