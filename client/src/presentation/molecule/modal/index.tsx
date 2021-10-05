import React from "react";
import styled from "./styled";

const Modal: React.FC<propTypes> = ({ idName, on, children }) => {
  return (
    <styled.Modal on={on} id={idName + "--top"}>
      <styled.ModalContent>
        <styled.ModalLayout id={idName}>{children}</styled.ModalLayout>
      </styled.ModalContent>
    </styled.Modal>
  );
};

type propTypes = {
  idName: string;
  on: 1 | 0;
};

export default Modal;
