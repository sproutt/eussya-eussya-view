import * as React from "react";
import styled from "./styled";
import defaultImag from "assets/default.png";
import hoverX from "assets/x.png";
const ChatCircle: React.FC = () => {
  const [hover, setHover] = React.useState<boolean>(false);
  return (
    <styled.Wrraper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <styled.Image src={defaultImag}></styled.Image>
      {hover && <styled.Xbutton src={hoverX}></styled.Xbutton>}
    </styled.Wrraper>
  );
};

export default ChatCircle;
