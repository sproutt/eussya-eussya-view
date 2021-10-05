import * as React from "react";
import styled from "./styled";
import { ReactComponent as FixIcon } from "assets/fix_icon.svg";
import { ReactComponent as SaveIcon } from "assets/SVGsave.svg";
import { ReactComponent as BreakIcon } from "assets/big_x.svg";
import { Application } from "context-instance";
import { TimeInput } from "presentation/molecule/time-input";
import moment from "moment";
import { Time } from "enum/time";
import { MissionStatus } from "enum/mission-status";

const ToDoView: React.FC<propTypes> = ({
  hours,
  minutes,
  title,
  contents,
  missionId,
  missionStatus,
  runningTime,
  changeContents,
  changeHours,
  changeMinutes,
  changeRunningTime,
  changeTitle,
  removeMission,
  startMission,
  finishMission,
  pauseMission,
}) => {
  const [isFixMode, setIsFixMode] = React.useState<boolean>(false);
  const [tempHours, setTempHours] = React.useState<number>(moment().hours());
  const [tempMinutes, setTempMinutes] = React.useState<number>(
    moment().minutes()
  );
  const [tempTitle, setTempTitle] = React.useState<string | undefined>(
    undefined
  );
  const [tempContents, setTempContents] = React.useState<string | undefined>(
    undefined
  );
  const [IntervalId, setIntervalId] = React.useState<any>(undefined);

  const changeTempHours = (value: number) => {
    setTempHours(value);
  };

  const changeTempMinutes = (value: number) => {
    setTempMinutes(value);
  };

  const getDate = (hour: number, minute: number) => {
    let date = new Date();
    let time = new Date();
    time.setHours(Time.MAXIMUM_TIME_HOUR - 1, 0, 0, 0);
    if (date.getTime() <= time.getTime()) {
      date.setHours(hour, minute, 0, 0);
      return date;
    }
    date.setDate(date.getDate() + 1);
    date.setHours(hour, minute, 0, 0);
    return date;
  };

  const updateMission = async () => {
    let result = await Application.services.mission.updateMission(
      missionId,
      tempTitle!,
      getDate(tempHours, tempMinutes).toISOString(),
      tempContents!
    );
    if (!result) alert("업데이트에 실패했습니다.");
    changeHours(tempHours);
    changeMinutes(tempMinutes);
    changeTitle(tempTitle!);
    changeContents(tempContents!);
    setIsFixMode(false);
  };

  const ChangeToTimeFormat = (hours: number, minutes: number) => {
    let result: string = "",
      textHours: string = "",
      textMinutes: string = "";
    let ampm: "AM" | "PM" = "AM";
    let tempHours: number = hours;
    if (tempHours >= 12) ampm = "PM";
    if (tempHours > 12) tempHours = tempHours - 12;
    if (tempHours < 10) textHours = "0" + tempHours.toString();
    if (tempHours >= 10) textHours = tempHours.toString();

    if (minutes < 10) textMinutes = "0" + minutes.toString();
    if (minutes >= 10) textMinutes = minutes.toString();

    result = textHours + " : " + textMinutes + " " + ampm;

    return result;
  };

  const getTimeFormatEcceptampm = (count: number) => {
    let tempCount = count;
    let hour: number = Math.floor(tempCount / 3600);
    tempCount = tempCount - Math.floor(tempCount / 3600) * 3600;
    let minute = Math.floor(tempCount / 60);
    tempCount = tempCount - Math.floor(tempCount / 60) * 60;
    let seconds = tempCount;
    let textHours: string = hour.toString();
    let textMinutes: string = minute.toString();
    let textSeconds: string = seconds.toString();
    if (hour < 10) textHours = "0" + hour;
    if (minute < 10) textMinutes = "0" + minute;
    if (seconds < 10) textSeconds = "0" + seconds;

    return textHours + " : " + textMinutes + " : " + textSeconds;
  };

  const changeToFixMode = () => {
    if (missionStatus !== MissionStatus.PENDING) return;
    setTempHours(hours);
    setTempMinutes(minutes);
    setTempContents(contents);
    setTempTitle(title);
    setIsFixMode(true);
  };

  React.useEffect(() => {
    if (
      IntervalId === undefined &&
      missionStatus === MissionStatus.IN_PROGRESS
    ) {
      let inter = setInterval(() => changeRunningTime(), 1000);
      setIntervalId(inter);
    }
    if (IntervalId !== undefined && missionStatus === MissionStatus.PENDING) {
      clearInterval(IntervalId);
      setIntervalId(undefined);
    }
  }, [missionStatus, IntervalId, setIntervalId, changeRunningTime]);

  return (
    <styled.Wrraper>
      <styled.Header>
        {isFixMode ? (
          <>
            <styled.TitleInput
              value={tempTitle}
              onChange={(event) => setTempTitle(event.target.value)}
              placeholder="제목"
            ></styled.TitleInput>
            <styled.ButtonBox onClick={updateMission}>
              <SaveIcon></SaveIcon>
            </styled.ButtonBox>
            <styled.ButtonBox onClick={() => setIsFixMode(false)}>
              <BreakIcon id="break-icon"></BreakIcon>
            </styled.ButtonBox>
          </>
        ) : (
          <>
            <label>title</label>
            <styled.Title>{title}</styled.Title>
            <styled.ButtonBox
              onClick={changeToFixMode}
              disabled={missionStatus === MissionStatus.IN_PROGRESS ? 1 : 0}
            >
              <FixIcon></FixIcon>
            </styled.ButtonBox>
            <styled.ButtonBox
              onClick={removeMission}
              disabled={missionStatus === MissionStatus.IN_PROGRESS ? 1 : 0}
            >
              <BreakIcon id="break-icon"></BreakIcon>
            </styled.ButtonBox>
          </>
        )}
      </styled.Header>
      <styled.Body>
        {isFixMode ? (
          <styled.TextArea
            value={tempContents}
            onChange={(event) => setTempContents(event.target.value)}
            placeholder="내용"
          ></styled.TextArea>
        ) : (
          <>
            <label>body</label>
            <styled.Text>{contents}</styled.Text>
          </>
        )}
      </styled.Body>
      <styled.Footer>
        {isFixMode ? (
          <styled.LabelBlock
            style={{ flexBasis: "100%", alignItems: "center" }}
          >
            <styled.Label>제한시간</styled.Label>
            <TimeInput
              hour={tempHours}
              minute={tempMinutes}
              changeHour={changeTempHours}
              changeMinute={changeTempMinutes}
            ></TimeInput>
          </styled.LabelBlock>
        ) : (
          <styled.LabelBlock style={{ flexBasis: "25%" }}>
            <styled.Label>제한시간</styled.Label>
            <styled.TimeLabel>
              {ChangeToTimeFormat(hours, minutes)}
            </styled.TimeLabel>
          </styled.LabelBlock>
        )}
        {!isFixMode && (
          <>
            <styled.LabelBlock style={{ flexBasis: "25%" }}>
              <styled.Label>진행시간</styled.Label>
              <styled.TimeLabel>
                {getTimeFormatEcceptampm(runningTime!)}{" "}
              </styled.TimeLabel>
            </styled.LabelBlock>

            <styled.LabelBlock
              style={{
                flexBasis: "50%",
                justifyContent: "flex-end",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {missionStatus === MissionStatus.PENDING && (
                <>
                  <styled.Button onClick={startMission}>시작</styled.Button>
                  <styled.Button onClick={() => finishMission(true)}>
                    마침
                  </styled.Button>
                </>
              )}
              {missionStatus === MissionStatus.IN_PROGRESS && (
                <styled.Button onClick={pauseMission}>일시정지</styled.Button>
              )}
            </styled.LabelBlock>
          </>
        )}
      </styled.Footer>
    </styled.Wrraper>
  );
};

type propTypes = {
  hours: number;
  minutes: number;
  title?: string;
  contents?: string;
  missionId: number;
  runningTime: number;
  missionStatus: MissionStatus;
  changeHours: (value: number) => void;
  changeMinutes: (value: number) => void;
  changeTitle: (value: string) => void;
  changeContents: (value: string) => void;
  changeRunningTime: () => void;
  removeMission: any;
  startMission: any;
  finishMission: any;
  pauseMission: any;
};

export default ToDoView;
