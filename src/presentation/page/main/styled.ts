import {
  FontSize,
  ElementDistanceEachOthers,
  ElementSizeByHeight,
} from "utils/style/size";
import styled from "styled-components";

const Banner = styled.section<{ color: string }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 2/12;
  width: 100%;
  height: 400px;
  margin: 0;
  h1 {
    font-size: ${FontSize.EXTRA_LARGE};
    margin: ${ElementDistanceEachOthers.SMALL};
  }
  @media screen and (min-width: 1920px) {
    grid-column: 3/13;
  }
  @media screen and (min-width: 1024px) and (max-width: 1344px) {
  }
  @media screen and (min-width: 720px) and (max-width: 1024px) {
    grid-column: 1/13;
    padding: 0 20px;
  }
  @media screen and (max-width: 720px) {
    grid-column: 1/7;
    padding: 0 20px;
  }
`;

const Explain = styled.article`
  box-sizing: border-box;
  background-color: #ffce3f;
  width: 100%;
  grid-column: 2/12;
  height: 300px;
  @media screen and (min-width: 1920px) {
    grid-column: 3/13;
  }
  @media screen and (min-width: 1024px) and (max-width: 1344px) {
  }
  @media screen and (min-width: 720px) and (max-width: 1024px) {
    grid-column: 1/13;
    padding: 0 20px;
  }
  @media screen and (max-width: 720px) {
    grid-column: 1/7;
    padding: 0 20px;
  }
`;

const Button = styled.button`
  margin: ${ElementDistanceEachOthers.MEDIUM};
  height: ${ElementSizeByHeight.MEDIUM_LARGE};
  cursor: pointer;
  width: auto;
  padding: ${ElementDistanceEachOthers.MEDIUM};
  border: 0;
  font-size: ${FontSize.MEDIUM};
  font-weight: bold;
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

  @media screen and (min-width: 1920px) {
    grid-template-columns: repeat(14, 1fr);
  }
  @media screen and (min-width: 1024px) and (max-width: 1344px) {
    grid-column-gap: 16px;
  }
  @media screen and (min-width: 720px) and (max-width: 1024px) {
    grid-column-gap: 12px;
    padding: 0;
  }
  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 8px;
    padding: 0;
  }
`;
export default {
  Banner,
  Container,
  Button,
  Explain,
};
