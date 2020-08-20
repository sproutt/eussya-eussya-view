import * as React from "react";
import styled from "./styled";
import { SizeKey } from "utils/style/size";
import { ValidationText } from "enum/validation-text";
import { isUndefined } from "util";

export const InputWithIcon: React.FC<propTypes> = ({
  size,
  name,
  type,
  imgSrc,
  value,
  onChange,
  onKeyUp,
  validator,
  validationText,
  setOn,
  autoComplete,
  pattern,
  onBlur,
  isDuplicatedValue,
  duplicatedText,
  auto,
}) => {
  const [isWrong, setIsWorng] = React.useState(true);
  const outLineBoxRef = React.useRef<HTMLDivElement>(null);
  const nameIconBoxRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isDuplicated, setIsDuplicated] = React.useState<boolean | undefined>(
    undefined
  );

  const focusHandler = () => {
    outLineBoxRef.current?.setAttribute("style", styled.focusOutLine);
    nameIconBoxRef.current?.setAttribute("style", styled.focusNameIcon);
  };

  const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      setIsDuplicated(true);
      onBlur().then();
    }
    if (!!!event.target.value) {
      outLineBoxRef.current?.removeAttribute("style");
      nameIconBoxRef.current?.removeAttribute("style");
    }
  };

  React.useEffect(() => {
    if (isUndefined(value)) return;
    if (setOn && validator) {
      setOn(validator(value));
      setIsWorng(validator(value));
    }
  }, [setOn, value, validator, onBlur]);

  const onChangeWrpper = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onBlur) setIsDuplicated(false);
    if (onChange) onChange(event);
  };

  React.useEffect(() => {
    if (auto) inputRef.current?.focus();
  }, [auto]);

  return (
    <>
      <styled.OutLineBox size={size} ref={outLineBoxRef}>
        <styled.NameIconBox ref={nameIconBoxRef}>
          <styled.Icon src={imgSrc} alt=""></styled.Icon>
          <styled.Name>{name}</styled.Name>
        </styled.NameIconBox>
        <styled.Input
          ref={inputRef}
          type={type}
          onFocus={focusHandler}
          onBlur={blurHandler}
          onChange={onChangeWrpper}
          onKeyUp={onKeyUp}
          autoComplete={autoComplete}
          value={value || ""}
          pattern={pattern}
        ></styled.Input>
        {(!isWrong || isDuplicatedValue === false) &&
          (!isWrong || !value ? (
            <styled.ValidationTextSpan>
              {validationText}
            </styled.ValidationTextSpan>
          ) : (
            isDuplicated && (
              <styled.ValidationTextSpan>
                {duplicatedText}
              </styled.ValidationTextSpan>
            )
          ))}
      </styled.OutLineBox>
    </>
  );
};

type propTypes = {
  size: SizeKey;
  name?: string;
  type?: string;
  imgSrc?: string;
  value?: string;
  auto?: boolean;
  autoComplete?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  validator?: (value?: string) => boolean;
  validationText?: ValidationText;
  setOn?: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  pattern?: string;
  onBlur?: () => Promise<void>;
  isDuplicatedValue?: boolean;
  duplicatedText?: string;
};
