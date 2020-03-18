import {
  SizeKey,
  SizeSeparator,
  ElementDistanceEachOthers,
  FontSize
} from "../../utils/style/size";
import styled, { css } from "styled-components";

const OutLineBox = styled.div<{ size: SizeKey }>`
  box-sizing: border-box;
  position: relative;
  width: 24rem;
  height: ${({ size }) => SizeSeparator.asElementHeight(size)};
  font-size: ${({ size }) => SizeSeparator.asFont(size)};
  padding: ${ElementDistanceEachOthers.EXTRASMALL};
  border: 1px solid black;
  border-radius: 5px;
  transition: 0.2s;
`;

const NameIconBox = styled.div`
  position: absolute;
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
  width: 100%;
  height: 100%;
  font-size: inherit;
  border: none;
  &:focus {
    outline: none;
  }
`;

const focusOutLine = `
  border-width: 2px;
`;

const focusNameIcon = `
  top: 0%;
  transform: translate(0,-120%);
  font-size: ${FontSize.MEDIUM_SMALL}
`;

const Name = styled.span``;

export default {
  OutLineBox,
  NameIconBox,
  Icon,
  Name,
  Input,
  focusOutLine,
  focusNameIcon
};
