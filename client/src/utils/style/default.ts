import { css } from "styled-components";

const RemoveAppearance = css`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const RemoveDefaultButton = css`
  :focus {
    outline: none;
  }
`;

const clearDistanceBorder = css`
  border: none;
  margin: 0;
  padding: 0;
`;

export default { RemoveAppearance, RemoveDefaultButton, clearDistanceBorder };
