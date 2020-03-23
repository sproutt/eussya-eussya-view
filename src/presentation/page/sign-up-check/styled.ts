import {
  FontSize,
  ElementSizeByHeight,
  ElementDistanceEachOthers
} from "utils/style/size";
import styled from "styled-components";
import { Color } from "utils/style/color";

const SignUpCheckBox = styled.section`
  width: 100%;
`;

const Span = styled.p`
  text-align: center;
  font-size: ${FontSize.MEDIUM_SMALL};
  color: ${Color.DISABLED_COLOR};
`;

const NumberCodeInputBox = styled.article`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
`;

const NumberCodeInput = styled.input`
  border: 1px solid black;
  border-radius: 4px;
  text-align: center;
  width: ${ElementSizeByHeight.LARGE};
  height: ${ElementSizeByHeight.EXTRA_LARGE};
  font-size: ${ElementSizeByHeight.LARGE};
  line-height: ${ElementSizeByHeight.EXTRA_LARGE};
  margin: ${ElementDistanceEachOthers.MEDIUM};
  text-transform: uppercase;
  padding: 0px auto;
  -webkit-ime-mode: disabled;
  -moz-ime-mode: disabled;
  -ms-ime-mode: disabled;
  ime-mode: disabled;
`;

export default { Span, NumberCodeInput, SignUpCheckBox, NumberCodeInputBox };
