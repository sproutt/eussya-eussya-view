import * as React from "react";
import axios from "axios";

import styled from "./styled";
import { RankingList } from "./rankingList";

export interface IRankingListProps {
  id: number;
  title: string;
}

export const Ranking: React.FC = () => {
  const [rankingList, setRankingList] = React.useState<[]>([]);

  React.useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get(
          "https://my-json-server.typicode.com/typicode/demo/posts"
        );
        setRankingList(data);
      } catch (error) {
        setRankingList([]);
      }
    })();
  }, [rankingList]);

  return (
    <React.Fragment>
      <styled.Block></styled.Block>
      <styled.Block>
        {rankingList.map(({ id, title }) => (
          <RankingList id={id} title={title}></RankingList>
        ))}
      </styled.Block>
    </React.Fragment>
  );
};
