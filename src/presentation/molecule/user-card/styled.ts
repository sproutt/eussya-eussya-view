import {
  ElementSizeByHeight,
  FontSize,
  ElementDistanceEachOthers,
} from "utils/style/size";
import styled from "styled-components";

const Wrraper = styled.div`
  width: 100%;
  cursor: pointer;
  padding-left: ${ElementDistanceEachOthers.MEDIUM_SMALL};
  padding-right: ${ElementDistanceEachOthers.MEDIUM_SMALL};
  padding-top: ${ElementDistanceEachOthers.SMALL_MEDIUM};
  padding-bottom: ${ElementDistanceEachOthers.SMALL_MEDIUM};
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    background-color: #dddddd;
  }
`;

const Image = styled.img`
  width: ${ElementSizeByHeight.SMALL};
  height: ${ElementSizeByHeight.SMALL};
  border: none;
  border-radius: ${ElementSizeByHeight.SMALL};
  margin-right: ${ElementDistanceEachOthers.MEDIUM_SMALL};
  overflow: hidden;
`;

const Name = styled.span`
  text-overflow: ellipsis;
  font-size: ${FontSize.SMALL_MEDIUM};
`;

export default { Wrraper, Image, Name };
