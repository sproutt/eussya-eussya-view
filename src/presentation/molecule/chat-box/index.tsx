import * as React from "react";
import styled from "./styled";

const ChatBox: React.FC = () => {
  const MIN_ROW = 1;
  const MAX_ROW = 5;
  const [contents, setContents] = React.useState<string | undefined>(undefined);
  const [rows, setRows] = React.useState<number | undefined>(undefined);

  const handelChangeOfChat = (event: any) => {};
  return (
    <styled.Wrapper>
      <styled.Layout>
        <styled.Header></styled.Header>
        <styled.Container></styled.Container>
        <styled.Footer>
          <styled.ChatInput rows={1}></styled.ChatInput>
        </styled.Footer>
      </styled.Layout>
    </styled.Wrapper>
  );
};

export default ChatBox;
