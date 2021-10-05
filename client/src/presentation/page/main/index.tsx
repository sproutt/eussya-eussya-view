import * as React from "react";
import styled from "./styled";
import { DigitalClock } from "presentation/molecule/digital-clock";
import { Application } from "context-instance";
import { useAuth } from "context-api/context/auth-context";
import useLastLocationHistory from "lib/history";

export const Main: React.FC = () => {
  const [motivationalPhrase, setMotivationalPhrase] = React.useState<
    string | undefined
  >(undefined);

  const auth = useAuth();
  const setHistory = useLastLocationHistory();

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

  return (
    <React.Fragment>
      <styled.Container>
        <styled.Banner color={""}>
          <styled.Block>
            <h1>{motivationalPhrase}</h1>
            <DigitalClock color={"#000000"}></DigitalClock>
            {auth.isLogined ? (
              <styled.Button onClick={() => setHistory("/dawn")}>
                눌러서 시작하기
              </styled.Button>
            ) : (
              <styled.Button
                onClick={() => {
                  setHistory("/login");
                }}
              >
                로그인
              </styled.Button>
            )}
          </styled.Block>
        </styled.Banner>
      </styled.Container>
    </React.Fragment>
  );
};
