import * as React from "react";
import styled from "./styled";

export const InputWithIcon: React.FC<propTypes> = ({
  name,
  type,
  imgSrc,
  value,
  onChange,
  autoComplete,
  children,
}) => {
  const outLineBoxRef = React.useRef<HTMLDivElement>(null);
  const nameIconBoxRef = React.useRef<HTMLDivElement>(null);

  const focusHandler = () => {
    outLineBoxRef.current?.setAttribute("style", styled.focusOutLine);
    nameIconBoxRef.current?.setAttribute("style", styled.focusNameIcon);
  };

  const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!!!event.target.value) {
      outLineBoxRef.current?.removeAttribute("style");
      nameIconBoxRef.current?.removeAttribute("style");
    }
  };

  const onChangeWrpper = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event);
  };

  return (
    <>
      <styled.OutLineBox ref={outLineBoxRef}>
        <styled.NameIconBox ref={nameIconBoxRef}>
          <styled.Icon src={imgSrc} alt=""></styled.Icon>
          <styled.Name>{name}</styled.Name>
        </styled.NameIconBox>
        <styled.Input
          type={type}
          onFocus={focusHandler}
          onBlur={blurHandler}
          onChange={onChangeWrpper}
          autoComplete={autoComplete}
          value={value || ""}
        ></styled.Input>
        {children}
      </styled.OutLineBox>
    </>
  );
};

type propTypes = {
  name?: string;
  type?: string;
  imgSrc?: string;
  value?: string;
  autoComplete?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
