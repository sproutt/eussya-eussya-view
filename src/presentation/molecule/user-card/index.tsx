import * as React from "react";
import styled from "./styled";
import defaultImag from "assets/default.png";

const UserCard: React.FC = () => {
  return (
    <styled.Wrraper>
      <styled.Image src={defaultImag}></styled.Image>
      <styled.Name> 김기표 </styled.Name>
    </styled.Wrraper>
  );
};

export default UserCard;
