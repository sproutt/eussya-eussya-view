import * as React from "react";
import styled from "./styled";
import ToDoView from "./to-do-view";
import UserCard from "presentation/molecule/user-card";
import ChatCircle from "presentation/molecule/chat-circle";
import ChatBox from "presentation/molecule/chat-box";
import moment from "moment";
import { MissionStatus } from "enum/mission-status";
import { Application } from "context-instance";
import Axios from "axios";
import { TodoResistration } from "presentation/molecule/to-do-resistration";
import GrassVisibility from "presentation/molecule/grass-visibility";

const EarlyCrazy: React.FC = () => {
  const [toDoModalOn, setTodoModalOn] = React.useState<boolean | undefined>(
    undefined
  );
  const [isExistMission, setIsExistMission] = React.useState<
    boolean | undefined
  >(undefined);
  const [title, setTitle] = React.useState<string | undefined>(undefined);
  const [contents, setContents] = React.useState<string | undefined>(undefined);
  const [hours, setHours] = React.useState<number>(moment().hours());
  const [minutes, setMinutes] = React.useState<number>(moment().minutes());
  const [missionId, setMissionId] = React.useState<number>(0);
  const [runningTime, setRunningTime] = React.useState<number>(0);
  const [missionStatus, setMissionStatus] = React.useState<MissionStatus>(
    MissionStatus.PENDING
  );

  const changeTodoModalOn = (value: boolean) => setTodoModalOn(value);

  const changeIsExistMission = (value: boolean) => {
    setIsExistMission(value);
  };

  const changeTitle = (value: string) => {
    setTitle(value);
  };

  const changeContents = (value: string) => {
    setContents(value);
  };

  const changeHours = (value: number) => {
    setHours(value);
  };

  const changeMinutes = (value: number) => {
    setMinutes(value);
  };

  const changeRunningTime = () => {
    setRunningTime((runningTime) => runningTime + 1);
  };
  const changeMissionStatus = (missionStatus: MissionStatus) => {
    setMissionStatus(missionStatus);
  };

  const findDate = () => {
    let hour = moment().hours();
    let [year, month, date] = [
      moment().year(),
      moment().month(),
      moment().date(),
    ];
    if (hour >= 9) {
      date = date + 1;
    }
    let time = new Date(year, month, date);
    return time.toISOString();
  };

  React.useEffect(() => {
    if (isExistMission === false) return;
    const CancelToken = Axios.CancelToken;
    const source = CancelToken.source();
    let userInfo = Application.services.member.getTokenData();
    if (!userInfo.member) alert("유저 정보가 존재하지 않습니다.");
    (async function () {
      try {
        let result = await Application.services.mission.getTodayMission(
          userInfo.member.memberId,
          findDate(),
          source
        );
        let missionInfo = result[0];
        let date = new Date(missionInfo.deadlineTime);
        setMissionId(missionInfo.id);
        setHours(date.getHours());
        setMinutes(date.getMinutes());
        setTitle(missionInfo.title);
        setContents(missionInfo.contents);
        setMissionStatus(missionInfo.status);
        if (missionInfo.runningTime) {
          setRunningTime(
            Number(missionInfo.runningTime.split(":")[0]) * 3600 +
              Number(missionInfo.runningTime.split(":")[1]) * 60 +
              Number(missionInfo.runningTime.split(":")[2])
          );
        }
        setIsExistMission(true);
      } catch (error) {
        setIsExistMission(false);
      }
    })();

    return () => source.cancel("요청중 페이지이동으로 요청 취소");
  }, [isExistMission]);

  return (
    <React.Fragment>
      <styled.Container>
        <styled.Main>
          <styled.SubMain>
            {isExistMission === true && (
              <styled.Block className="todo-view-block">
                <ToDoView
                  missionId={missionId}
                  title={title}
                  contents={contents}
                  hours={hours}
                  minutes={minutes}
                  missionStatus={missionStatus}
                  runningTime={runningTime}
                  changeContents={changeContents}
                  changeHours={changeHours}
                  changeMinutes={changeMinutes}
                  changeMissionStatus={changeMissionStatus}
                  changeRunningTime={changeRunningTime}
                  changeTitle={changeTitle}
                  changeIsExistMission={changeIsExistMission}
                ></ToDoView>
              </styled.Block>
            )}
            {isExistMission === false && (
              <styled.NoBackgroundBlock
                className="create-mission-block"
                onClick={() => setTodoModalOn(true)}
              >
                <styled.Script>미션 추가하기</styled.Script>
              </styled.NoBackgroundBlock>
            )}
            <styled.Block>
              <GrassVisibility></GrassVisibility>
            </styled.Block>
          </styled.SubMain>
        </styled.Main>
        <styled.Side>
          <styled.PeopleListLabel>
            <styled.PeopleListLabelName>사람들...</styled.PeopleListLabelName>
          </styled.PeopleListLabel>
          <UserCard></UserCard>
        </styled.Side>
        <TodoResistration
          on={toDoModalOn}
          changeModal={changeTodoModalOn}
          changeIsExistMission={changeIsExistMission}
        ></TodoResistration>
      </styled.Container>
    </React.Fragment>
  );
};

export default EarlyCrazy;
