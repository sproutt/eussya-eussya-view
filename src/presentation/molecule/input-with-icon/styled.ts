import {
  ElementDistanceEachOthers,
  FontSize,
  ElementSizeByHeight,
} from "../../../utils/style/size";
import styled, { css } from "styled-components";
import { Color } from "utils/style/color";

const OutLineBox = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: ${ElementSizeByHeight.MEDIUM};
  font-size: ${FontSize.SMALL};
  padding: ${ElementDistanceEachOthers.EXTRA_SMALL};
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
  font-size: ${FontSize.MEDIUM_SMALL};
  border: none;
  &:focus {
    outline: none;
  }
  &[type="password"] {
    letter-spacing: 5px;
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
  font-size: ${FontSize.SMALL}
`;

const ValidationTextSpan = styled.span`
  position: absolute;
  left: 0;
  top: ${ElementSizeByHeight.MEDIUM};
  font-size: ${FontSize.EXTRA_SMALL};
  color: ${Color.WARNING_COLOR};
`;

const Name = styled.label``;

const duplicateCheckIcon = styled.img`
  position: absolute;
  top: 50%;
  transform: translate(100%, -50%);
  height: ${ElementSizeByHeight.TWO_EXTRA_SMALL};
  width: auto;
`;

export default {
  OutLineBox,
  NameIconBox,
  Icon,
  Name,
  Input,
  focusOutLine,
  focusNameIcon,
  ValidationTextSpan,
  duplicateCheckIcon,
};
