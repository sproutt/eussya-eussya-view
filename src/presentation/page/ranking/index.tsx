import React, { useState } from "react";
import Filter from "./Filter";
import MyRankingbox from "./MyRankingbox";
import Rankingbox from "./Rankingbox";
import Content from "./Content";
import styled from "./styled";

let users = [
  {
    ranking: 1,
    trend: "⬆",
    id: "singco",
    count: 13,
    totalCount: 52,
  },
  {
    ranking: 2,
    trend: "⬆",
    id: "ETC",
    count: 8,
    totalCount: 27,
  },
];

let myLanking = {
  ranking: 12,
  trend: "⬆",
  id: "egoing",
  count: 6,
  totalCount: 8,
};

const THIS_WEEK = `3월 둘째주(14~18)`;

export const Ranking: React.FC = () => {
  const [userRanking, setUserRanking] = useState(users);
  const [week, setWeek] = useState(THIS_WEEK);
  const [myCurrentRanking, setMyCurrentLanking] = useState(myLanking);

  return (
    <styled.Ranking>
      <Filter week={week} />
      <Content />
      <MyRankingbox
        ranking={myCurrentRanking.ranking}
        trend={myCurrentRanking.trend}
        id={myCurrentRanking.id}
        count={myCurrentRanking.count}
        totalCount={myCurrentRanking.totalCount}
      />
      {users.map((userRanking) => (
        <Rankingbox
          ranking={userRanking.ranking}
          trend={userRanking.trend}
          id={userRanking.id}
          count={userRanking.count}
          totalCount={userRanking.totalCount}
        />
      ))}
    </styled.Ranking>
  );
};
