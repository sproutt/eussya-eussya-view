import * as React from "react";
import styled from "./styled";
export const SignUpCheck: React.FC = () => {
  const nextInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const index = Number(event.currentTarget.id.split("-")[1]);
    const key = event.keyCode;
    if ((key === 8 || key === 46) && index !== 0) {
      const element = document.getElementById(`code-${index - 1}`);
      element?.focus();
      return;
    }
    if (key === 8 || key === 46 || key === 0 || key === 9) {
      event.stopPropagation();
      return;
    }
    if (/[^a-zA-Z0-9]/.test(event.key)) {
      event.currentTarget.value = event.currentTarget.value
        .replace(/[^a-zA-Z0-9]/gi, "")
        .trim();
      return;
    }
    if (index === 7) event.currentTarget.blur();
    if (!event.currentTarget.value.length) return;
    const element = document.getElementById(`code-${index + 1}`);
    element?.focus();
  };

  const blockKorean = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.value = event.target.value
      .replace(/[^a-zA-Z0-9]/gi, "")
      .trim();
  };

  const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.value = "";
  };

  return (
    <styled.SignUpCheckBox>
      <styled.Span>
        가입하신 이메일을 통해 인증번호 6자리를 보냈습니다. 다음 입력칸에 알맞은
        인증번호를 입력하시면 가입이 완료됩니다.
      </styled.Span>
      <styled.NumberCodeInputBox>
        {Array.from({ length: 8 }, (element, index) => (
          <styled.NumberCodeInput
            maxLength={1}
            key={index}
            id={`code-${index}`}
            onFocus={onFocus}
            onBlur={blockKorean}
            onKeyUp={nextInput}
          ></styled.NumberCodeInput>
        ))}
      </styled.NumberCodeInputBox>
    </styled.SignUpCheckBox>
  );
};
