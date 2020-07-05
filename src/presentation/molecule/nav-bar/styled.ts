import styled from "styled-components";
import { ElementSizeByHeight } from "utils/style/size";
import { Color } from "utils/style/color";

const NavBar = styled.nav`
  display: block;
  width: 100%;
  height: ${ElementSizeByHeight.MEDIUM};
  background-color: ${Color.MAIN_COLOR};
`;

export default { NavBar };
