import styled, { css } from "styled-components";

const reactiveUI = css`
  @media screen and (min-width: 1920px) {
    grid-template-columns: repeat(14, 1fr);
  }
  @media screen and (min-width: 1024px) and (max-width: 1344px) {
    grid-column-gap: 16px;
  }
  @media screen and (min-width: 720px) and (max-width: 1024px) {
    grid-column-gap: 12px;
  }
  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 8px;
  }
`;

const Container = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
  width: 100%;
  height: auto;
  padding: 0 20px;
  box-sizing: border-box;
  ${reactiveUI};
`;

export default { Container };
