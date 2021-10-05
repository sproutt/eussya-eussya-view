import React from "react";
import styled from "./styled";
import { DigitalNumber } from "presentation/molecule/digital-number";
import moment from "moment";

export const DigitalClock: React.FC<{ color: string }> = ({ color }) => {
  function changeTime() {
    const hour = moment().format("HH");
    const minute = moment().format("mm");
    const seconds = moment().format("ss");

    document
      .getElementById("hour-1")
      ?.setAttribute("class", "digital num-" + hour.substr(0, 1));
    document
      .getElementById("hour-2")
      ?.setAttribute("class", "digital num-" + hour.substr(1, 1));
    document
      .getElementById("minute-1")
      ?.setAttribute("class", "digital num-" + minute.substr(0, 1));
    document
      .getElementById("minute-2")
      ?.setAttribute("class", "digital num-" + minute.substr(1, 1));
    document
      .getElementById("seconds-1")
      ?.setAttribute("class", "digital num-" + seconds.substr(0, 1));
    document
      .getElementById("seconds-2")
      ?.setAttribute("class", "digital num-" + seconds.substr(1, 1));
  }

  React.useEffect(() => {
    const setTime = setInterval(changeTime, 1000);
    return () => clearInterval(setTime);
  }, []);
  return (
    <styled.Clock color={color}>
      <div className={"hours"}>
        <DigitalNumber id="hour-1"></DigitalNumber>
        <DigitalNumber id="hour-2"></DigitalNumber>
      </div>
      <div className={"minutes"}>
        <DigitalNumber id="minute-1"></DigitalNumber>
        <DigitalNumber id="minute-2"></DigitalNumber>
      </div>
      <div className={"seconds"}>
        <DigitalNumber id="seconds-1"></DigitalNumber>
        <DigitalNumber id="seconds-2"></DigitalNumber>
      </div>
    </styled.Clock>
  );
};
