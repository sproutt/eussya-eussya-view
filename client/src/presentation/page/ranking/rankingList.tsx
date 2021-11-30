import * as React from "react";

import styled from "./styled";
import { IRankingListProps } from "./index";

export const RankingList: React.FC<IRankingListProps> = ({ id, title }) => {
  const WEEK = 7;
  const MONTH = 30;
  const HALFYEAR = 182;
  let progressValue = (id / WEEK) * 100;

  return (
    <styled.RankingBlock>
      <styled.Ranking>{id}</styled.Ranking>
      <styled.User src={title} alt="profile"></styled.User>
      <styled.Progress value={progressValue}></styled.Progress>
    </styled.RankingBlock>
  );
};
