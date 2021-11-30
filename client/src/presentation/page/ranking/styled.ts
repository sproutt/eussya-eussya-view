import styled from "styled-components";

import {
  ElementDistanceEachOthers,
  ElementSizeByHeight,
} from "utils/style/size";

const Block = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${ElementDistanceEachOthers.MEDIUM};
  min-height: ${ElementSizeByHeight.SMALL};
  background-color: #ffffff;
  margin: ${ElementDistanceEachOthers.MEDIUM_SMALL} 0;
  border-raidus: 5px;
  width: 40%;
  min_width: 300px;
  height: auto;
  box-shadow: 0 1px 1px 1px #00000020;
`;

const RankingBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${ElementDistanceEachOthers.MEDIUM};
  min-height: ${ElementSizeByHeight.SMALL};
  background-color: #ffffff;
  margin: ${ElementDistanceEachOthers.MEDIUM_SMALL} 0;
  min_width: 500px;
  height: auto;
`;

const Ranking = styled.div`
  display: flex;
  align-items: center;
`;

const User = styled.img`
  border-radius: 50%;
`;
const Progress = styled.progress`
  display: flex;
  justify-content: center;
  align-items: center;
  max: 100;
`;

export default {
  Block,
  RankingBlock,
  Ranking,
  User,
  Progress,
};
