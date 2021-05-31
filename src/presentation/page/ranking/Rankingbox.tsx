import React, { useState } from "react";
import styled from "./styled";

type RankingProps = {
  profile?: string;
  ranking: number;
  trend?: string;
  id: string;
  count: number;
  totalCount: number;
};

const Rankingbox: React.FC<RankingProps> = ({
  profile,
  ranking,
  trend,
  id,
  count,
  totalCount,
}) => {
  return (
    <styled.Rankingbox>
      <img src={profile}></img> <div>{ranking}</div><div>{trend}</div>{" "}
      <div>{id}</div><div>{count}</div><div>{totalCount}</div>
    </styled.Rankingbox>
  );
};

export default Rankingbox;
