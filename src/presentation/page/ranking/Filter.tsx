import React, { useState } from "react";
import styled from "./styled";

type FilterProps = {
  week: string;
};

const Filter: React.FC<FilterProps> = ({ week }) => {
  return (
    <styled.Filter>
      <div>
        <button className="week">주간</button>
        <button className="month">월간</button>
      </div>
      <div>
        <button>🔻</button>
        {week}
        <button>🔺</button>
      </div>
      <div>팀 내 랭킹|전체유저 랭킹|팔로워와의 랭킹</div>
    </styled.Filter>
  );
};

export default Filter;
