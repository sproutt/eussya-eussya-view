import { ElementDistanceEachOthers, FontSize } from "utils/style/size";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${ElementDistanceEachOthers.MEDIUM};
`;

const SmallBox = styled.section<propTypesOfSmallBox>`
  height: 16px;
  width: 16px;
  background-color: ${({ color, count }) => (count === 0 ? "#dddddd" : color)};
  margin: 3px;
`;

const Top = styled.div`
  width: 100%;
  padding: ${ElementDistanceEachOthers.MEDIUM};
`;

const FlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 154px;
`;

const Left = styled.div`
  height: 154px;
  width: calc(${ElementDistanceEachOthers.MEDIUM} * 2);
`;

const PlateLabel = styled.label<{ left?: number }>`
  position: absolute;
  font-size: ${FontSize.EXTRA_SMALL};
  color: #999999;
  font-weight: bold;
  font-style: italic;
  top: -${FontSize.SMALL};
  left: ${({ left }) => left + "px"};
`;

const Title = styled.h1`
  margin: 0;
  color: #888888;
  font-style: italic;
  font-size: ${FontSize.MEDIUM_SMALL};
`;

const PlateLabelDay = styled.label<{ top?: number }>`
  position: absolute;
  font-size: ${FontSize.EXTRA_SMALL};
  color: #999999;
  font-weight: bold;
  font-style: italic;
  top: ${({ top }) => top + "px"};
  left: -33px;
`;

const GrassPlate = styled.section`
  position: relative;
  height: 154px;
  width: 440px;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

type propTypesOfSmallBox = {
  color: string;
  count: number;
};

export default {
  Wrapper,
  SmallBox,
  GrassPlate,
  PlateLabel,
  Top,
  Left,
  FlexBox,
  PlateLabelDay,
  Title,
};
