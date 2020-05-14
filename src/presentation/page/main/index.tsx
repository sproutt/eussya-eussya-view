import * as React from "react";
import styled from "./styled";
import { DigitalClock } from "presentation/molecule/digital-clock";
import { EarlyCrazyPopUp } from "presentation/molecule/early-crazy-pop-up";
import logo from "assets/logo.svg";

export const Main: React.FC = () => {
  const [pop, setPop] = React.useState<boolean | undefined>(undefined);

  let color = "#000000";

  let popUp = (
    <styled.PopUpWrapper>
      <styled.PopUp onClick={() => setPop(false)}>
        <EarlyCrazyPopUp></EarlyCrazyPopUp>
      </styled.PopUp>
    </styled.PopUpWrapper>
  );

  return (
    <styled.Container>
      <styled.Header>
        <styled.Logo src={logo}></styled.Logo>
        <styled.HeaderButton>투데이 얼또</styled.HeaderButton>
        <styled.HeaderButton>얼또 랭킹</styled.HeaderButton>
      </styled.Header>
      <styled.Banner color={""}>
        <h1>일곱번 넘어져도 여덟 번 일어나라</h1>
        <DigitalClock color={color}></DigitalClock>
        <styled.Button onClick={() => setPop(true)}>
          눌러서 시작하기
        </styled.Button>
      </styled.Banner>
      <styled.Explain></styled.Explain>
      {pop && popUp}
    </styled.Container>
  );
};
