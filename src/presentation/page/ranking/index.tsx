import React from "react";
import Counter from "./Counter";
import Filter from "./Filter";
import MyRankingbox from "./MyRankingbox";
import Rankingbox from "./Rankingbox";
import Content from "./Content"
import styled from "./styled";

const week = `3월 둘째주(14~18)`;

const users = [
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

const myLanking = {
  ranking: 12,
  trend: "⬆",
  id: "egoing",
  count: 6,
  totalCount: 8,
}

const Ranking: React.FC = () => {
  return (
    <styled.Ranking>
      <Filter week={week}/>
      <Content/>
      <MyRankingbox
        ranking={myLanking.ranking}
        trend={myLanking.trend}
        id={myLanking.id}
        count={myLanking.count}
        totalCount={myLanking.totalCount}
      />
      {users.map((user) => (
        <Rankingbox
          ranking={user.ranking}
          trend={user.trend}
          id={user.id}
          count={user.count}
          totalCount={user.totalCount}
        />
      ))}
    </styled.Ranking>
  );
};

export default Ranking;
