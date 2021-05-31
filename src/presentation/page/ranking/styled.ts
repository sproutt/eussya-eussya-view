import styled from "styled-components";

const Ranking = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding-top: 10vh;
  
`;

const Rankingbox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 70px;
  background-color: #e0f7ff;
  margin-top: 8px;
  box-shadow: 0 1px 1px 1px #00000020;

  p {
    display: flex;
    align-items: center;
    padding: 0, 10px, 0, 50px;
  }

  img {
    width: 30px;
    border-radius: 50%;
  }
`;

const MyRankingbox = styled.div`
  align-items: center;
  width: 80%;
  height: 70px;
  background-color: #fffdcc;
  box-shadow: 0 1px 1px 1px #00000020;
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 100px 0 0 15vw;
  width: 65%;
  height: 60px;
`;

export default {
  MyRankingbox,
  Rankingbox,
  Ranking,
  Content,
  Filter,
};
