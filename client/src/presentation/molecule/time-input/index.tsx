import * as React from "react";
import styled from "./styled";
import moment from "moment";
import { ReactComponent as UpButton } from "assets/SVGup.svg";
import { ReactComponent as DownButton } from "assets/SVGdown.svg";
import { Time } from "enum/time";

export const TimeInput: React.FC<propTypes> = ({
  hour,
  changeHour,
  minute,
  changeMinute,
}) => {
  let leastTime =
    moment().hours() >= Time.LEAST_TIME_HOUR &&
    moment().hours() <= Time.MAXIMUM_TIME_HOUR
      ? moment().hours()
      : Time.LEAST_TIME_HOUR;
  let leastMinute =
    moment().hours() >= Time.LEAST_TIME_HOUR &&
    moment().hours() <= Time.MAXIMUM_TIME_HOUR
      ? moment().minutes()
      : 0;
  const [hourUpButtonDisabled, setHourUpButtonDisabled] = React.useState<
    boolean | undefined
  >(undefined);
  const [hourDownButtonDisabled, setHourDownButtonDisabled] = React.useState<
    boolean | undefined
  >(undefined);
  const [minuteUpButtonDisabled, setMinuteUpButtonDisabled] = React.useState<
    boolean | undefined
  >(undefined);
  const [
    minuteDownButtonDisabled,
    setMinuteDownButtonDisabled,
  ] = React.useState<boolean | undefined>(undefined);
  const [modalOn, setModalOn] = React.useState<number | undefined>(undefined);

  const checkHourHigh = React.useCallback(() => {
    return hour! < Time.MAXIMUM_TIME_HOUR;
  }, [hour]);

  const checkHourLow = React.useCallback(() => {
    return hour! > leastTime;
  }, [hour, leastTime]);

  const checkHourLowAboutMinute = React.useCallback(() => {
    return (hour! === leastTime && minute! > leastMinute) || hour! > leastTime;
  }, [hour, minute, leastTime, leastMinute]);

  const changeUpOfHour = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();
    if (hour! + 1 > Time.MAXIMUM_TIME_HOUR) {
      setHourUpButtonDisabled(true);
      return;
    }
    if (hour! + 1 === Time.MAXIMUM_TIME_HOUR) {
      changeHour(hour! + 1);
      changeMinute(0);
      return;
    }
    changeHour(hour! + 1);
  };

  const changeDownOfHour = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();
    if (hour! - 1 < leastTime) {
      setHourDownButtonDisabled(true);
      return;
    }
    if (hour! - 1 === leastTime) {
      changeHour(hour! - 1);
      return;
    }
    changeHour(hour! - 1);
  };

  const changeUpOfMinute = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();
    let tempMinute = (parseInt((minute! / 5).toString()) * 5) % 60;
    if (hour! >= Time.MAXIMUM_TIME_HOUR) {
      setMinuteUpButtonDisabled(true);
      changeMinute(0);
      return;
    }
    if (tempMinute + 5 >= 60) {
      changeUpOfHour(event);
      changeMinute(0);
      return;
    }
    changeMinute(tempMinute + (5 % 60));
  };

  const changeDownOfMinute = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    let tempMinute = (parseInt((minute! / 5).toString()) * 5) % 60;
    if (minuteDownButtonDisabled) return;
    if (hour! <= leastTime && tempMinute - 5 <= 0) {
      setMinuteDownButtonDisabled(true);
      changeMinute(0);
      return;
    }
    if (tempMinute - 5 < 0) {
      changeDownOfHour(event);
      changeMinute(55);
      return;
    }
    changeMinute(tempMinute - 5);
  };

  React.useEffect(() => {
    setMinuteUpButtonDisabled(!checkHourHigh());
    setHourUpButtonDisabled(!checkHourHigh());
    setMinuteDownButtonDisabled(!checkHourLowAboutMinute());
    setHourDownButtonDisabled(!checkHourLow());
  }, [checkHourHigh, checkHourLow, checkHourLowAboutMinute]);

  React.useEffect(() => {
    if (
      (hour! >= Time.LEAST_TIME_HOUR && hour! < Time.MAXIMUM_TIME_HOUR) ||
      (hour! === Time.MAXIMUM_TIME_HOUR && minute! === 0)
    ) {
      return;
    }
    changeHour(Time.LEAST_TIME_HOUR);
    changeMinute(0);
  }, [changeHour, changeMinute, hour, minute]);

  const changeSpecificMinute = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    let value = Number(event.currentTarget.querySelector("span")?.innerHTML);
    if (!checkMinuteValue(value)) return;
    changeMinute(value);
    setModalOn(0);
    document.removeEventListener("click", clickEvent);
  };

  const changeMinuteComponentState = () => {
    let elements = document.querySelectorAll(".minute_modal--data");
    elements.forEach((e) => {
      e.classList.remove("state");
    });
    if (hour! > leastTime && hour! < Time.MAXIMUM_TIME_HOUR) return;
    elements.forEach((e) => {
      if (!checkMinuteValue(Number(e.querySelector("span")?.innerHTML)))
        e.classList.add("state");
    });
  };

  const checkMinuteValue = (m: number) => {
    if (hour! > leastTime && hour! < Time.MAXIMUM_TIME_HOUR) return true;
    if (hour! === Time.MAXIMUM_TIME_HOUR && m === 0) return true;
    if (hour! === leastTime && m >= leastMinute) return true;
    return false;
  };

  const clickEvent = React.useCallback(
    function (event: any) {
      if (event.target.closest("#minute__modal")) return;
      document.removeEventListener("click", clickEvent);
      setModalOn(0);
    },
    [setModalOn]
  );

  React.useEffect(() => {
    if (modalOn === 1) document.addEventListener("click", clickEvent);
  }, [modalOn, clickEvent]);

  return (
    <styled.Box>
      <styled.Box>
        <styled.CulunmBox>
          <styled.RowBox
            disable={hourUpButtonDisabled}
            onClick={changeUpOfHour}
          >
            <UpButton id="hourUpButton"></UpButton>
          </styled.RowBox>
          <styled.RowBox>
            <span>{hour! < 10 ? "0" + hour : hour}</span>
          </styled.RowBox>
          <styled.RowBox
            disable={hourDownButtonDisabled}
            onClick={changeDownOfHour}
          >
            <DownButton></DownButton>
          </styled.RowBox>
        </styled.CulunmBox>
        <styled.CulunmBox>
          <span>:</span>
        </styled.CulunmBox>
        <styled.CulunmBox>
          <styled.RowBox
            disable={minuteUpButtonDisabled}
            onClick={changeUpOfMinute}
          >
            <UpButton></UpButton>
          </styled.RowBox>
          <styled.RowBox
            onClick={() => {
              changeMinuteComponentState();
              setModalOn(1);
            }}
          >
            <span>{minute! < 10 ? "0" + minute : minute}</span>
          </styled.RowBox>
          <styled.RowBox
            disable={minuteDownButtonDisabled}
            onClick={changeDownOfMinute}
          >
            <DownButton></DownButton>
          </styled.RowBox>
        </styled.CulunmBox>
        <styled.CulunmBox>
          <styled.RowBox>
            <span>AM</span>
          </styled.RowBox>
        </styled.CulunmBox>
      </styled.Box>
      <styled.BorderBox on={modalOn} id="minute__modal">
        <styled.CulunmBox>
          <styled.RowBox
            className="minute_modal--data"
            onClick={changeSpecificMinute}
          >
            <span>00</span>
          </styled.RowBox>
          <styled.RowBox
            className="minute_modal--data"
            onClick={changeSpecificMinute}
          >
            <span>20</span>
          </styled.RowBox>
          <styled.RowBox
            className="minute_modal--data"
            onClick={changeSpecificMinute}
          >
            <span>40</span>
          </styled.RowBox>
        </styled.CulunmBox>
        <styled.CulunmBox>
          <styled.RowBox
            className="minute_modal--data"
            onClick={changeSpecificMinute}
          >
            <span>05</span>
          </styled.RowBox>
          <styled.RowBox
            className="minute_modal--data"
            onClick={changeSpecificMinute}
          >
            <span>25</span>
          </styled.RowBox>
          <styled.RowBox
            className="minute_modal--data"
            onClick={changeSpecificMinute}
          >
            <span>45</span>
          </styled.RowBox>
        </styled.CulunmBox>
        <styled.CulunmBox>
          <styled.RowBox
            className="minute_modal--data"
            onClick={changeSpecificMinute}
          >
            <span>10</span>
          </styled.RowBox>
          <styled.RowBox
            className="minute_modal--data"
            onClick={changeSpecificMinute}
          >
            <span>30</span>
          </styled.RowBox>
          <styled.RowBox
            className="minute_modal--data"
            onClick={changeSpecificMinute}
          >
            <span>50</span>
          </styled.RowBox>
        </styled.CulunmBox>
        <styled.CulunmBox>
          <styled.RowBox
            className="minute_modal--data"
            onClick={changeSpecificMinute}
          >
            <span>15</span>
          </styled.RowBox>
          <styled.RowBox
            className="minute_modal--data"
            onClick={changeSpecificMinute}
          >
            <span>35</span>
          </styled.RowBox>
          <styled.RowBox
            className="minute_modal--data"
            onClick={changeSpecificMinute}
          >
            <span>55</span>
          </styled.RowBox>
        </styled.CulunmBox>
      </styled.BorderBox>
    </styled.Box>
  );
};

type propTypes = {
  hour: number | undefined;
  minute: number | undefined;
  changeHour: any;
  changeMinute: any;
};
