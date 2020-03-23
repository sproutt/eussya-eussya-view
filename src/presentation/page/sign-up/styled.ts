import styled from "styled-components";
import {
  ElementSizeByHeight,
  ElementDistanceEachOthers,
  FontSize
} from "utils/style/size";
import { Color } from "utils/style/color";
const SignUpBox = styled.section`
  display: flex;
  width: 30rem;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignUpButton = styled.button`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  height: ${ElementSizeByHeight.MEDIUM_LARGE};
  margin: ${ElementDistanceEachOthers.LARGE} 0;
  border-radius: 5px;
  font-size: ${FontSize.MEDIUM};
  font-weight: bold;
  background-color: ${Color.MAIN_COLOR};
  color: white;
  :focus {
    outline: none;
  }
  :disabled {
    color: ${Color.DISABLED_COLOR};
    background-color: ${Color.DISABLED_MAIN_COLOR};
  }
`;

export default { SignUpBox, SignUpButton };
