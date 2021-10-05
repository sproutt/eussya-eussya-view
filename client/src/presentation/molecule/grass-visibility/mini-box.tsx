import * as React from "react";
import styled from "./styled";

const MiniBox: React.FC<propTypes> = ({ dates, datas, maxCount }) => {
  const MAX_LIGHTNESS = 80;
  const MIN_LIGHTNESS = 40;

  const calculatePercent = () => {
    let perColor = (MAX_LIGHTNESS - MIN_LIGHTNESS) / maxCount;
    return MAX_LIGHTNESS - perColor * datas.count;
  };
  return (
    <styled.SmallBox
      id={dates}
      count={datas.count}
      color={datas.count === 0 ? "" : `hsl(210,100%,${calculatePercent()}%)`}
    ></styled.SmallBox>
  );
};

type propTypes = {
  dates: string;
  datas: {
    year: number;
    month: number;
    date: number;
    count: number;
    day: number;
  };
  maxCount: number;
};

export default MiniBox;
