import * as React from "react";
import style from "../button.module.scss";
import { Size } from "enum/size";

const ROUND_BUTTON = "-round-button";

export const RoundButton: React.FC<propTypes> = ({
  onClick,
  size = Size.MEDIUM,
  children
}) => {
  console.log(size);
  return (
    <button className={style[size + ROUND_BUTTON]} onClick={onClick}>
      {children}
    </button>
  );
};

type propTypes = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: Size;
};
