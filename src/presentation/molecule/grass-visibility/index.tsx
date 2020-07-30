import * as React from "react";
import styled from "./styled";
import { useGrass, useGrassDispatch } from "context-api/context/grass-context";
import { Application } from "context-instance";
import Axios from "axios";
import MiniBox from "./mini-box";
import { MissionStatus } from "enum/mission-status";

const GrassVisibility: React.FC<propTypes> = ({ isExistMission }) => {
  let grass = useGrass();
  let grassDispatch = useGrassDispatch();

  const getDateOfHundredDaysAgo = () => {
    let date = new Date();
    let today = {
      year: date.getFullYear(),
      month: date.getMonth(),
      date: date.getDate(),
    };
    let temp = today;
    for (let index = 0; index < 140; index++) {
      temp = minusOneDate(temp);
    }
    return temp;
  };

  const minusOneDate = (dates: {
    year: number;
    month: number;
    date: number;
  }): { year: number; month: number; date: number } => {
    let datesByMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let datesByLeapYearMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let year = dates.year;
    let month = dates.month;
    let date = dates.date;
    if (date - 1 === 0 && month - 1 < 0) {
      year = year - 1;
      month = 11;
      date = 31;
      return { year, month, date };
    }
    if (date - 1 === 0 && month - 1 === 1 && isLeapyear(year)) {
      month = month - 1;
      date = datesByLeapYearMonth[month - 1];
      return { year, month, date };
    }
    if (date - 1 === 0) {
      month = month - 1;
      date = datesByMonth[month - 1];
      return { year, month, date };
    }
    date = date - 1;
    return { year, month, date };
  };

  const isLeapyear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  React.useEffect(() => {
    const CancelToken = Axios.CancelToken;
    const source = CancelToken.source();

    let userInfo = Application.services.member.getTokenData();
    if (!userInfo.member) alert("유저 정보가 존재하지 않습니다.");
    let dateOfhundredDaysAgo = getDateOfHundredDaysAgo();
    (async function () {
      let result: [any] = await Application.services.mission.getTodayMission(
        userInfo.member.memberId,
        new Date(
          dateOfhundredDaysAgo.year,
          dateOfhundredDaysAgo.month,
          dateOfhundredDaysAgo.date,
          0,
          0,
          0,
          0
        ).toISOString(),
        source
      );

      let grassResult = result.map((v) => {
        let dates = new Date(v.deadlineTime);
        return {
          year: dates.getFullYear(),
          month: dates.getMonth() + 1,
          date: dates.getDate(),
          status: v.status as MissionStatus,
        };
      });
      grassDispatch({ type: "SAVE", data: grassResult });
    })();

    return () => source.cancel("요청중 페이지이동으로 요청 취소");
  }, []);

  const makegrass = () => {
    let values = Array.from(grass.values());
    let max = values.reduce(
      (pre, acc) => (pre < acc.count ? acc.count : pre),
      0
    );
    let keys = Array.from(grass.keys());
    return keys.map((v) => (
      <MiniBox key={v} dates={v} datas={grass.get(v)!} maxCount={max} />
    ));
  };

  const findMonth = () => {
    if (grass.size <= 0) return;
    let month = [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
    ];
    let keys = Array.from(grass.keys()).reverse();
    let temp = keys[0].split("-")[1];
    let result = [{ v: 3, month: Number(temp) }];
    for (let index = 7; index < keys.length; index = index + 7) {
      let value = keys[index].split("-")[1];
      if (temp === value) continue;
      result.push({ v: (index / 7) * 22 + 3, month: Number(value) });
      temp = value;
    }
    return result.map((v, i) => (
      <styled.PlateLabel key={i} left={v.v}>
        {month[v.month - 1]}
      </styled.PlateLabel>
    ));
  };

  const findDay = () => {
    if (grass.size <= 0) return;
    let day = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
    let keys = Array.from(grass.keys()).reverse();
    let result = [{ v: 4, day: grass.get(keys[0])?.day }];
    result.push({ v: 22 * 3 + 4, day: grass.get(keys[3])?.day });
    result.push({ v: 22 * 6 + 4, day: grass.get(keys[6])?.day });
    return result.map((v, i) => (
      <styled.PlateLabelDay key={i} top={v.v}>
        {day[v.day!]}
      </styled.PlateLabelDay>
    ));
  };

  return (
    <styled.Wrapper>
      <styled.Title>How many missions have I done?</styled.Title>
      <styled.Top></styled.Top>
      <styled.FlexBox>
        <styled.Left></styled.Left>
        <styled.GrassPlate>
          {makegrass().reverse()}
          {findDay()}
          {findMonth()}
        </styled.GrassPlate>
      </styled.FlexBox>
    </styled.Wrapper>
  );
};

type propTypes = {
  isExistMission?: boolean;
};

export default GrassVisibility;
