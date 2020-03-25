import * as React from "react";
import styled from "./styled";
import { Application } from "context-instance";
import { useParams } from "react-router-dom";
export const SignUpCheck: React.FC = () => {
  const params = useParams<{ email: string }>();
  const history = useHistory();
  const [code, setCode] = React.useState<string[]>(new Array(8));

  const nextInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const index = Number(event.currentTarget.id.split("-")[1]);
    const key = event.keyCode;
    if ((key === 8 || key === 46) && index !== 0) {
      const element = document.getElementById(`code-${index - 1}`);
      element?.focus();
      return;
    }
    if (key === 8 || key === 46 || key === 0 || key === 9 || key === 20) {
      event.stopPropagation();
      return;
    }
    if (index === 7) {
      event.currentTarget.blur();
      checkCode(params.email, code.join(""));
      return;
    }
    if (!event.currentTarget.value.length) return;
    const element = document.getElementById(`code-${index + 1}`);
    element?.focus();
  };

  const checkCode = async (email: string, code: string) => {
    const result = Application.services.member.checkCode(email, code);
    if (result) {
      history.push("/");
    }
    alert("인증코드가 틀렸습니다.");
  };

  const blockKorean = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.value = event.target.value
      .replace(/[^a-zA-Z0-9]/gi, "")
      .trim();
  };

  const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.value = "";
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(event.currentTarget.id.split("-")[1]);
    console.log(code);
    if (/[^a-zA-Z0-9]/.test(event.target.value)) {
      event.target.value = "";
      return;
    }
    code[index] = event.target.value;
    setCode(code);
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
            onChange={onChange}
          ></styled.NumberCodeInput>
        ))}
      </styled.NumberCodeInputBox>
    </styled.SignUpCheckBox>
  );
};
