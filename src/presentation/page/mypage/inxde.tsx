import React from "react";
import styled from "./styled";
import gridStyle from "assets/style/grid";

const MyPage: React.FC = () => {
  return (
    <React.Fragment>
      <gridStyle.Container>
        <styled.MyBox>
          <h1>TITLE</h1>
          <hr></hr>
          <div>
            <h2>이름</h2>
            <span>이름이름</span>
            <button>변경</button>
          </div>
          <div>
            <h2>이름</h2>
            <span>이름이름</span>
            <button>변경</button>
          </div>
          <div>
            <h2>이름</h2>
            <span>이름이름</span>
            <button>변경</button>
          </div>
        </styled.MyBox>
      </gridStyle.Container>
    </React.Fragment>
  );
};

export default MyPage;
