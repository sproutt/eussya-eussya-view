import event from "lib/key-evnet/event";
import * as React from "react";
import styled from "./styled";
import { Chat } from "../../../core/entity/chat";

const ChatBox: React.FC = () => {
  const MIN_ROW = 1;
  const MAX_ROW = 5;
  const chatArea = document.querySelector("#chat-area")!
  const [contents, setContents] = React.useState<string | undefined>(undefined);
  const [chats, setChats] = React.useState<Array<JSX.Element>>([
    <styled.IncomingMessage>
    상대방 
    <styled.MessageBubble>
        안녕!
    </styled.MessageBubble>
    <small>오전 11:50</small>
    </styled.IncomingMessage>
  ]);
  const [rows, setRows] = React.useState<number | undefined>(undefined);

  const handleChangeOfChat = (event: any) => { };
  
  function sendChat(text: String) {
    const chat = new Chat("나", text, new Date())
    const timeString = chat.sentTime?.toLocaleTimeString();
    
    setChats(chats => [...chats,
      <styled.MyMessage>
        <styled.MessageBubble>
          {chat.content}
        </styled.MessageBubble>
        <small>{timeString?.substring(0, timeString.length - 3)}</small>
      </styled.MyMessage>
    ])
    chatArea.scrollTop = chatArea.scrollHeight
  }

  const onKeyUpHandler = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key !== "Enter") return
    parseChat()
  }

  const sendButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    parseChat()
  }

  function parseChat() {
    const chatInput = document.getElementById("chat-input") as HTMLTextAreaElement
    const content: String = chatInput.value
    if (content !== "\n" && content.length !== 0) {
      sendChat(content)
    }
    chatInput.value = ""
  }


  return (
    <styled.Wrapper>
      <styled.Layout>
        <styled.Header>대화방 이름</styled.Header>
        <styled.Container id="chat-area">{chats.flatMap(t => [t,<div><tr></tr></div>])}</styled.Container>
        <styled.Footer>
          <styled.ChatInput rows={1} onKeyUp={onKeyUpHandler} id="chat-input"></styled.ChatInput>
          <styled.SendButton onClick={sendButtonClickHandler}>전송</styled.SendButton>
        </styled.Footer>
      </styled.Layout>
    </styled.Wrapper>
  );
};

export default ChatBox;
