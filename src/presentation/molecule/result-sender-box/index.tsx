import React from "react";
import styled from "./styled";
import Modal from "../modal";
import ModalStyled from "../modal/styled";
import { ReactComponent as CloseSVG } from "assets/SVGclose.svg";
import ResultModalEvent from "lib/result-modal-event";
import CheckModal from "../check-modal";
import { Application } from "context-instance";

const ResultSenderBox: React.FC<PropTypes> = ({
  on,
  missionTitle,
  changeModal,
  missionContents,
  missionId,
  finishMission,
}) => {
  const [resultModalOnoff, setResultModalOnoff] = React.useState<0 | 1>(0);
  const [missionResult, setMissionResult] = React.useState<string | undefined>(
    undefined
  );
  const [resultModalTitle, setResultModalTitle] = React.useState<
    string | undefined
  >(undefined);
  const [resultModalAction, setResultModalAction] = React.useState<
    string | undefined
  >(undefined);
  const [resultModalText, setResultModalText] = React.useState<
    string | undefined
  >(undefined);

  const changeResultModalOnoff = (value: any) => {
    setResultModalOnoff(value);
  };

  const resultModalEvent = new ResultModalEvent(setResultModalOnoff);

  const actionReducer = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    event && event.preventDefault();
    switch (resultModalAction) {
      default:
        resultModalEvent.removeClickOutSideEvent(event);
        return setResultModalOnoff(0);
    }
  };

  const postResult = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      event && event.preventDefault();
      //향후 예외처리 필요
      if (missionResult === undefined || missionId === undefined) return;
      if (missionResult.length <= 0) return;
      const result = await Application.services.mission.postResult(
        missionId,
        missionResult!
      );
      if (!result.ok) {
        setResultModalTitle("오류");
        setResultModalAction("anyting");
        setResultModalText("오류");
        resultModalEvent.addClickOutSideEvent();
        return setResultModalOnoff(1);
      }
      closeEvent(event);
      finishMission();
    } catch (error) {
      setResultModalTitle("오류");
      setResultModalAction("anyting");
      setResultModalText("오류");
      resultModalEvent.addClickOutSideEvent();
      return setResultModalOnoff(1);
    }
  };

  const handleChangeOfResultContext = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMissionResult(event.target.value);
  };

  const getDocument = (id: string) => {
    return document && document.getElementById(id)!;
  };

  const removeModalCloseEvent = React.useCallback(
    function (event: any) {
      if (event.target.closest("#result-sender--modal")) return;
      getDocument("result-sender--modal--top")!.removeEventListener(
        "click",
        removeModalCloseEvent
      );
      changeModal(false);
    },
    [changeModal]
  );

  const closeEvent = (event?: any) => {
    if (event) event.preventDefault();
    changeModal(false);
    getDocument("result-sender--modal--top")!.removeEventListener(
      "click",
      removeModalCloseEvent
    );
  };

  React.useEffect(() => {
    if (on === true) {
      getDocument("result-sender--modal--top")!.addEventListener(
        "click",
        removeModalCloseEvent
      );
    }
  }, [on, removeModalCloseEvent]);

  return (
    <Modal idName={"result-sender--modal"} on={on ? 1 : 0}>
      <ModalStyled.Header>
        <ModalStyled.HeaderTitle>제목 : {missionTitle}</ModalStyled.HeaderTitle>
        <ModalStyled.CloseButton onClick={closeEvent}>
          <CloseSVG></CloseSVG>
        </ModalStyled.CloseButton>
      </ModalStyled.Header>
      <ModalStyled.Body>
        <styled.ContentsWrapper>
          <styled.Label>계획</styled.Label>
          <styled.Text>{missionContents}</styled.Text>
        </styled.ContentsWrapper>
        <styled.ContentsWrapper>
          <styled.Label>내용</styled.Label>
          <styled.TextArea
            value={missionResult}
            onChange={handleChangeOfResultContext}
          ></styled.TextArea>
        </styled.ContentsWrapper>

        <styled.Footer>
          <styled.Button onClick={postResult}>확인</styled.Button>
        </styled.Footer>
      </ModalStyled.Body>
      <CheckModal
        onOff={resultModalOnoff}
        setOnoff={changeResultModalOnoff}
        title={resultModalTitle}
        action={actionReducer}
        closeCheckModal={resultModalEvent.removeClickOutSideEvent}
      >
        {resultModalText}
      </CheckModal>
    </Modal>
  );
};

type PropTypes = {
  on: boolean | undefined;
  missionId: number;
  missionTitle: string;
  changeModal: any;
  missionContents: string;
  finishMission: any;
};

export default ResultSenderBox;
