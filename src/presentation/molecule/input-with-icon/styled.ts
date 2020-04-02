import {
  SizeKey,
  SizeSeparator,
  ElementDistanceEachOthers,
  FontSize
} from "../../../utils/style/size";
import styled, { css } from "styled-components";
import { Color } from "utils/style/color";

const OutLineBox = styled.div<{ size: SizeKey }>`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: ${({ size }) => SizeSeparator.asElementHeight(size)};
  font-size: ${FontSize.MEDIUM_SMALL};
  padding: ${ElementDistanceEachOthers.EXTRASMALL};
  border: 1px solid black;
  border-radius: 5px;
  transition: 0.2s;
  margin: calc(${FontSize.MEDIUM_SMALL} + ${ElementDistanceEachOthers.SMALL});
`;

const NameIconBox = styled.div`
  position: absolute;
  z-index: -1;
  color: #555555;
  top: 50%;
  transform: translate(1rem, -50%);
  display: flex;
  align-items: center;
  transition: 0.2s;
`;

const Icon = styled.img`
  ${({ src }) => {
    if (src)
      return css`
        width: 25px;
        height: 25px;
      `;
    return css`
      width: 0px;
      height: 0px;
    `;
  }};
`;

const Input = styled.input`
  box-sizing: border-box;
  background-color: #ffffff00;
  width: 100%;
  height: 100%;
  font-size: ${FontSize.MEDIUM};
  border: none;
  &:focus {
    outline: none;
  }
`;

const focusOutLine = `
  border-width: 2px;
  padding-left: ${ElementDistanceEachOthers.SMALL};
`;

const focusNameIcon = `
  color: black;
  top: 0%;
  transform: translate(0,-120%);
  font-size: ${FontSize.MEDIUM_SMALL}
`;

const ValidationTextSpan = styled.span`
  font-size: ${FontSize.SMALL};
  color: ${Color.WARNING_COLOR};
`;

const Name = styled.label``;

export default {
  OutLineBox,
  NameIconBox,
  Icon,
  Name,
  Input,
  focusOutLine,
  focusNameIcon,
  ValidationTextSpan
};
