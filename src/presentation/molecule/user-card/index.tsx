import * as React from "react";
import styled from "./styled";
import defaultImag from "assets/default.png";

const UserCard: React.FC<PropTypes> = ({ nickName }) => {
  return (
    <styled.Wrraper>
      <styled.Image src={defaultImag}></styled.Image>
      <styled.Name> {nickName} </styled.Name>
    </styled.Wrraper>
  );
};

type PropTypes = {
  nickName?: string;
};

export default UserCard;
