import * as React from "react";
import styled from "./styled";
import { SizeKey } from "utils/style/size";

export const InputWithIcon: React.FC<propTypes> = ({
  size,
  name,
  type,
  imgSrc,
  value,
  onChange
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

  return (
    <styled.OutLineBox size={size} ref={outLineBoxRef}>
      <styled.NameIconBox ref={nameIconBoxRef}>
        <styled.Icon src={imgSrc} alt=""></styled.Icon>
        <styled.Name>{name}</styled.Name>
      </styled.NameIconBox>
      <styled.Input
        type={type}
        onFocus={focusHandler}
        onBlur={blurHandler}
        onChange={onChange}
        value={value}
      ></styled.Input>
    </styled.OutLineBox>
  );
};

type propTypes = {
  size: SizeKey;
  name?: string;
  type?: string;
  imgSrc?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
