import { Color } from "utils/style/color";
import { ElementSizeByHeight, FontSize } from "utils/style/size";
import styled from "styled-components";

const Box = styled.section`
  position: relative;
  display: flex;
  align-items: center;
`;

const BorderBox = styled.section<BoderBoxProp>`
  display: ${({ on }) => (on === 1 ? "flex" : "none")};
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  align-items: center;
  background-color: white;
  border-radius: 1px;
  box-shadow: 0 4px 6px 0px #00000030;
`;

const CulunmBox = styled.div`
  display: flex;
  flex-direction: column;
  min-width: calc(${ElementSizeByHeight.SMALL} * 1.4);
  text-align: center;
  span {
    font-size: ${FontSize.MEDIUM};
    font-weight: bolder;
    user-select: none;
  }
`;

const RowBox = styled.div<RowBoxProp>`
  height: ${ElementSizeByHeight.SMALL};
  width: calc(${ElementSizeByHeight.SMALL} * 1.4);
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &.state {
    color: #dddddd;
  }
  &.state:hover {
    background-color: white;
  }
  &:hover {
    background-color: ${({ disable }) =>
      disable ? "none" : Color.MAIN_COLOR + "20"};
  }
  svg {
    width: 30%;
  }
  svg polygon {
    fill: ${({ disable }) => (disable ? "#dddddd" : "#000000")};
  }
`;

const Img = styled.img`
  width: 30%;
  height: auto;
`;

type RowBoxProp = {
  disable?: boolean;
  state?: string;
};
type BoderBoxProp = {
  on: number | undefined;
};

export default { Box, CulunmBox, RowBox, Img, BorderBox };
