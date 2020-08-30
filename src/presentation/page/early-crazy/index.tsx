import * as React from "react";
import styled from "./styled";
import ToDoView from "./to-do-view";
import UserCard from "presentation/molecule/user-card";
import moment from "moment";
import { MissionStatus } from "enum/mission-status";
import { Application } from "context-instance";
import Axios from "axios";
import { TodoResistration } from "presentation/molecule/to-do-resistration";
import GrassVisibility from "presentation/molecule/grass-visibility";
import ResultSenderBox from "presentation/molecule/result-sender-box";

const EarlyCrazy: React.FC = () => {
  const [resultSenderModalOn, setResultSenderModalOn] = React.useState<
    boolean | undefined
  >(undefined);
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
  const [membersData, setMembersData] = React.useState<
    { id: number; memberId: string; nickName: string }[] | undefined
  >(undefined);

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

  const changeSetResultSenderModal = (value: boolean) => {
    setResultSenderModalOn(value);
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
        let missionInfo = result.find(
          (value: any) => value.status === MissionStatus.PENDING
        );
        if (missionInfo.status === MissionStatus.COMPLETE)
          return setIsExistMission(false);
        setRunningTime(0);
        console.log(missionInfo.status);
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
        } else {
          setRunningTime(0);
        }
        setIsExistMission(true);
      } catch (error) {
        setIsExistMission(false);
      }
    })();

    return () => source.cancel("요청중 페이지이동으로 요청 취소");
  }, [isExistMission]);

  React.useEffect(() => {
    const CancelToken = Axios.CancelToken;
    const source = CancelToken.source();
    let userInfo = Application.services.member.getTokenData();
    if (!userInfo.member) alert("유저 정보가 존재하지 않습니다.");
    (async function () {
      try {
        let result = await Application.services.member.getMembers(
          userInfo.member.memberId,
          source
        );
        let members = result.data;
        setMembersData(members);
      } catch (error) {}
    })();

    return () => source.cancel("요청중 페이지이동으로 요청 취소");
  }, []);

  const startMission = async () => {
    if (missionStatus !== MissionStatus.PENDING) return;
    let result = await Application.services.mission.start(missionId);
    if (!result) return alert("오류입니다.");
    setMissionStatus(MissionStatus.IN_PROGRESS);
  };

  const pauseMission = async () => {
    if (missionStatus !== MissionStatus.IN_PROGRESS) return;
    let result = await Application.services.mission.pause(missionId);
    if (!result) return alert("오류입니다.");
    setMissionStatus(MissionStatus.PENDING);
  };

  const removeAnimation = () => {
    let element = document.querySelector(".todo-view-block");
    element?.classList.add("remove");
    setTimeout(() => changeIsExistMission(false), 500);
  };

  const finishMission = async () => {
    if (missionStatus === MissionStatus.IN_PROGRESS) return;
    let result = await Application.services.mission.complete(missionId);
    if (!result) return alert("시작하지 못했습니다. 다시 시도해주세요.");
    removeAnimation();
  };

  const removeMission = async () => {
    if (missionStatus === MissionStatus.IN_PROGRESS) return;
    let result = await Application.services.mission.remove(missionId);
    if (!result) return alert("제거하지 못했습니다. 다시 시도해주세요.");
    removeAnimation();
  };

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
                  changeRunningTime={changeRunningTime}
                  changeTitle={changeTitle}
                  removeMission={removeMission}
                  startMission={startMission}
                  finishMission={changeSetResultSenderModal}
                  pauseMission={pauseMission}
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
              <GrassVisibility
                isExistMission={isExistMission}
              ></GrassVisibility>
            </styled.Block>
          </styled.SubMain>
        </styled.Main>
        <styled.Side>
          <styled.PeopleListLabel>
            <styled.PeopleListLabelName>사람들...</styled.PeopleListLabelName>
          </styled.PeopleListLabel>
          {membersData &&
            membersData.map((v, i) => (
              <UserCard key={i} nickName={v.nickName} />
            ))}
        </styled.Side>
        <TodoResistration
          on={toDoModalOn}
          changeModal={changeTodoModalOn}
          changeIsExistMission={changeIsExistMission}
        ></TodoResistration>
        <ResultSenderBox
          on={resultSenderModalOn}
          changeModal={changeSetResultSenderModal}
          missionTitle={title!}
          missionContents={contents!}
        ></ResultSenderBox>
      </styled.Container>
    </React.Fragment>
  );
};

export default EarlyCrazy;
