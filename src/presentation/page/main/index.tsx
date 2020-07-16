import * as React from "react";
import styled from "./styled";
import { DigitalClock } from "presentation/molecule/digital-clock";
import { Application } from "context-instance";
import { NavBar } from "presentation/molecule/nav-bar";
import { TodoResistration } from "presentation/molecule/to-do-resistration";

export const Main: React.FC = () => {
  const [motivationalPhrase, setMotivationalPhrase] = React.useState<
    string | undefined
  >(undefined);
  const [toDoModalOn, setTodoModalOn] = React.useState<boolean | undefined>(
    undefined
  );
  React.useEffect(() => {
    (async function () {
      try {
        let text = await Application.services.system.getMotivatedMassage();
        setMotivationalPhrase(text);
      } catch (error) {
        setMotivationalPhrase("일곱번 넘어져도 여덟 번 일어나라");
      }
    })();
  }, []);

  const changeTodoModalOn = (value: boolean) => setTodoModalOn(value);

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <styled.Container>
        <styled.Banner color={""}>
          <h1>{motivationalPhrase}</h1>
          <DigitalClock color={"#000000"}></DigitalClock>
          <styled.Button onClick={() => setTodoModalOn(true)}>
            눌러서 시작하기
          </styled.Button>
        </styled.Banner>
        <TodoResistration
          on={toDoModalOn}
          changeModal={changeTodoModalOn}
        ></TodoResistration>
      </styled.Container>
    </React.Fragment>
  );
};
