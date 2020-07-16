import * as React from "react";
import styled from "./styled";
import moment from "moment";
import { TimeInput } from "presentation/molecule/time-input";
import { ReactComponent as CloseSVG } from "assets/SVGclose.svg";
export const TodoResistration: React.FC<PropTypes> = ({ on, changeModal }) => {
  const [hour, setHour] = React.useState<number>(moment().hours());
  const [minute, setMinute] = React.useState<number>(moment().minutes());
  const [title, setTitle] = React.useState<string>("");
  const [contents, setContents] = React.useState<string>("");

  const changeHour = (value: number) => {
    setHour(value);
  };

  const changeMinute = (value: number) => {
    setMinute(value);
  };

  const clickEvent = React.useCallback(
    function (event: any) {
      if (event.target.closest("#todo__modal")) return;
      this.removeEventListener("click", clickEvent);
      changeModal(false);
    },
    [changeModal]
  );

  const closeEvent = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.preventDefault();
    changeModal(false);
    document.removeEventListener("click", clickEvent);
  };

  React.useEffect(() => {
    if (on === true) document.addEventListener("click", clickEvent);
  }, [on, clickEvent]);

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
              <styled.SubimtButton disabled={title.trim().length <= 0}>
                등록
              </styled.SubimtButton>
            </styled.Footer>
          </styled.Body>
        </styled.ModalLayout>
      </styled.ModalContent>
    </styled.Modal>
  );
};

type PropTypes = {
  on: boolean | undefined;
  changeModal: any;
};
