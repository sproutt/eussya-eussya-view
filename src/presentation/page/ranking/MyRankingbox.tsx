import React, { useState } from "react";
import styled from "./styled";

type MyRankingProps = {
  profile?: string;
  ranking: number;
  trend?: string;
  id: string;
  count: number;
  totalCount: number;
};

const MyRankingbox: React.FC<MyRankingProps> = ({
  profile,
  ranking,
  trend,
  id,
  count,
  totalCount,
}) => {
  return (
    <styled.MyRankingbox>
      <div>
        <img src={profile}></img> <p>{ranking}</p> <p>{trend}</p> <p>{id}</p>{" "}
        <p>{count}</p> <p>{totalCount}</p>
      </div>
    </styled.MyRankingbox>
  );
};

export default MyRankingbox;
