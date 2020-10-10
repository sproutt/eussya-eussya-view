import styled from "styled-components";

const MyBox = styled.article`
  grid-column: 3/11;

  @media screen and (min-width: 1920px) {
    grid-column: 4/10;
  }
  @media screen and (min-width: 1024px) and (max-width: 1344px) {
    grid-column: 2/12;
  }
  @media screen and (min-width: 720px) and (max-width: 1024px) {
    grid-column: 1/13;
  }
  @media screen and (max-width: 720px) {
    grid-column: 1/7;
  }
`;

export default { MyBox };
