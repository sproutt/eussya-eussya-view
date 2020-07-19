import * as React from "react";
import styled from "./styled";
import { ReactComponent as CloseSVG } from "assets/SVGclose.svg";

const CheckModal: React.FC<propTypes> = ({
  title,
  action,
  onOff,
  children,
  closeCheckModal,
}) => {
  return (
    <styled.ModalBackground on={onOff}>
      <styled.Modal id="result-modal" on={onOff}>
        <styled.Header>
          <span>{title}</span>
          <styled.CloseButton onClick={closeCheckModal}>
            <CloseSVG></CloseSVG>
          </styled.CloseButton>
        </styled.Header>
        <styled.Body>
          <span>{children}</span>
          <styled.Button onClick={action}>확인</styled.Button>
        </styled.Body>
      </styled.Modal>
    </styled.ModalBackground>
  );
};

type propTypes = {
  title?: string;
  action: any;
  onOff: 1 | 0;
  closeCheckModal: any;
};

export default CheckModal;
