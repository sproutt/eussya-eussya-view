import * as React from "react";
import style from "../button.module.scss";
import { Size } from "utils/style/size";

const ROUND_BUTTON = "-round-button";

export const RoundButton: React.FC<propTypes> = ({
  onClick,
  size = Size.MEDIUM,
  className = "",
  children
}) => {
  const currentClassName = style[size + ROUND_BUTTON];

  return (
    <div className={[currentClassName, className].join(" ")} onClick={onClick}>
      {children}
    </div>
  );
};

type propTypes = {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  size?: Size;
  className?: string;
};
