import styled from "styled-components";
import {
  ElementDistanceEachOthers,
  ElementSizeByHeight,
} from "utils/style/size";

const Wrraper = styled.div`
  position: relative;
  padding: ${ElementDistanceEachOthers.SMALL_MEDIUM};
  border: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${ElementDistanceEachOthers.MEDIUM};
  &:hover > .big-icon {
    box-shadow: 0px 0px 15px 1px #00000050;
  }
`;

const Image = styled.img.attrs({
  className: "big-icon",
})`
  cursor: pointer;
  padding: 0;
  margin: 0;
  width: ${ElementSizeByHeight.MEDIUM};
  height: ${ElementSizeByHeight.MEDIUM};
  border: none;
  border-radius: ${ElementSizeByHeight.MEDIUM};
  overflow: hidden;
  box-shadow: 0px 0px 15px 1px #00000020;
`;

const Xbutton = styled.img`
  position: absolute;
  top: 0px;
  left: ${ElementSizeByHeight.MEDIUM};

  transform: translate(-25%, 25%);
  padding: 0;
  margin: 0;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 1.5rem;
  box-shadow: 0px 0px 8px 0px #00000020;

  &:hover {
    box-shadow: 0px 0px 8px 0px #00000050;
  }
`;

export default { Wrraper, Image, Xbutton };
