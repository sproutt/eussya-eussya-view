import * as React from "react";
import styled from "./styled";
import moment from "moment";
import { TimeInput } from "presentation/molecule/time-input";
import { ReactComponent as CloseSVG } from "assets/SVGclose.svg";
import { Application } from "context-instance";
import { Time } from "enum/time";
import { MissionErrorMessage } from "enum/mission-error-message";
import CheckModal from "presentation/molecule/check-modal";
import { MissionErrorCode } from "enum/mission-error-code";
import { AuthErrorCode } from "enum/auth-error-code";

export const TodoResistration: React.FC<PropTypes> = ({
  on,
  changeModal,
  changeIsExistMission,
}) => {
  const [hour, setHour] = React.useState<number>(moment().hours());
  const [minute, setMinute] = React.useState<number>(moment().minutes());
  const [title, setTitle] = React.useState<string>("");
  const [contents, setContents] = React.useState<string>("");
  const [resultModalOnoff, setResultModalOnoff] = React.useState<0 | 1>(0);
  const [resultModalTitle, setResultModalTitle] = React.useState<
    string | undefined
  >(undefined);
  const [resultModalAction, setResultModalAction] = React.useState<
    string | undefined
  >(undefined);
  const [resultModalText, setResultModalText] = React.useState<
    string | undefined
  >(undefined);

  const changeHour = (value: number) => {
    setHour(value);
  };

  const changeMinute = (value: number) => {
    setMinute(value);
  };

  const clearInput = () => {
    setHour(moment().hours());
    setMinute(moment().minutes());
    setTitle("");
    setContents("");
  };

  const removeModalCloseEvent = React.useCallback(
    function (event: any) {
      if (event.target.closest("#todo__modal")) return;
      this.removeEventListener("click", removeModalCloseEvent);
      changeModal(false);
    },
    [changeModal]
  );

  const closeEvent = (event?: any) => {
    if (event) event.preventDefault();
    changeModal(false);
    clearInput();
    document.removeEventListener("click", removeModalCloseEvent);
  };

  React.useEffect(() => {
    if (on === true) document.addEventListener("click", removeModalCloseEvent);
  }, [on, removeModalCloseEvent]);

  const removeResultModalCloseEvent = function (event: any) {
    if (event.target.closest("#result-modal")) return;
    this.removeEventListener("click", removeResultModalCloseEvent);
    setResultModalOnoff(0);
  };

  const addResultModalEvent = () => {
    document.addEventListener("click", removeResultModalCloseEvent);
  };

  const getDate = () => {
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

  const closeResultModal = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    event.preventDefault();
    document.removeEventListener("click", removeResultModalCloseEvent);
    setResultModalOnoff(0);
  };

  const clickSubmit = async (event: any) => {
    try {
      let result = await Application.services.mission.postMission(
        title,
        getDate().toISOString(),
        contents
      );
      if (result.ok) {
        let element = document.querySelector(".create-mission-block");
        element?.classList.add("remove");
        closeEvent();
        setTimeout(() => {
          changeIsExistMission(true);
        }, 500);
        return;
      }
      setResultModalText(result.message);
      addResultModalEvent();
      if (result.message === AuthErrorCode.NOT_USER) {
        setResultModalAction(AuthErrorCode.NOT_USER);
        setResultModalTitle("인증 오류");
        setResultModalOnoff(1);
        return;
      }
      if (result.message === MissionErrorMessage.NOT_DAWN) {
        setResultModalAction(MissionErrorCode.NOT_DAWN);
        setResultModalTitle("시간 오류");
        setResultModalOnoff(1);
        return;
      }
      setResultModalTitle("알 수 없는 오류");
      setResultModalOnoff(1);
    } catch (error) {}
  };

  const actionReducer = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    event.preventDefault();
    switch (resultModalAction) {
      case MissionErrorCode.NOT_DAWN:
        document.removeEventListener("click", removeResultModalCloseEvent);
        return setResultModalOnoff(0);
      case AuthErrorCode.NOT_USER:
        document.removeEventListener("click", removeResultModalCloseEvent);
        return setResultModalOnoff(0);
      default:
        document.removeEventListener("click", removeResultModalCloseEvent);
        return setResultModalOnoff(0);
    }
  };
  return (
    <styled.Modal on={on ? 1 : 0}>
      <styled.ModalContent>
        <styled.ModalLayout id={"todo__modal"}>
          <styled.Header>
            <styled.HeaderTitle>오늘의 미션 등록하기</styled.HeaderTitle>
            <styled.CloseButton onClick={closeEvent}>
              <CloseSVG></CloseSVG>
            </styled.CloseButton>
          </styled.Header>
          <styled.Body>
            <styled.TitleBox>
              <styled.InputLabel>제목</styled.InputLabel>
              <styled.Input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              ></styled.Input>
            </styled.TitleBox>
            <styled.TitleBox>
              <styled.InputLabel>내용</styled.InputLabel>
              <styled.MissionTextArea
                value={contents}
                onChange={(event) => setContents(event.target.value)}
              ></styled.MissionTextArea>
            </styled.TitleBox>
            <styled.RowBox>
              <styled.Label>기한</styled.Label>
              <TimeInput
                hour={hour}
                changeHour={changeHour}
                minute={minute}
                changeMinute={changeMinute}
              ></TimeInput>
            </styled.RowBox>
            <styled.Footer>
              <styled.SubimtButton
                onClick={clickSubmit}
                disabled={title.trim().length <= 0}
              >
                등록
              </styled.SubimtButton>
            </styled.Footer>
          </styled.Body>
          <CheckModal
            onOff={resultModalOnoff}
            title={resultModalTitle}
            action={actionReducer}
            closeCheckModal={closeResultModal}
          >
            {resultModalText}
          </CheckModal>
        </styled.ModalLayout>
      </styled.ModalContent>
    </styled.Modal>
  );
};

type PropTypes = {
  on: boolean | undefined;
  changeModal: any;
  changeIsExistMission: (value: boolean) => void;
};
