import styled from "styled-components";
import {
  ElementSizeByHeight,
  ElementDistanceEachOthers,
  FontSize,
} from "utils/style/size";
import { Color } from "utils/style/color";

const NavBar = styled.nav`
  display: flex;
  width: 100%;
  height: ${ElementSizeByHeight.MEDIUM_MEDIUM_LARGE};
  background-color: ${Color.MAIN_COLOR};
  padding: ${ElementDistanceEachOthers.SMALL_MEDIUM} 20px;
  box-shadow: 0 1px 3px 2px #00000020;
`;

const NavFirstGroup = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 0;
`;

const NavSecondGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  cursor: pointer;
  height: 100%;
  margin-right: 20px;
`;

const NavButton = styled.span`
  display: inline-block;
  cursor: pointer;
  color: #fffcfc;
  white-space: nowrap;
  font-size: ${FontSize.MEDIUM_SMALL};
  font-weight: 700;
  margin-right: ${ElementDistanceEachOthers.SMALL_MEDIUM};
  transition-property: color, opacity;
  transition-duration: 400ms, 400ms;

  &:hover {
    color: #f3f1f198;
  }
`;

const NavSpan = styled.span`
  display: inline-block;
  cursor: default;
  color: #eeeeee;
  white-space: nowrap;
  font-size: ${FontSize.MEDIUM_SMALL};
  font-weight: 700;
  margin: 0 ${ElementDistanceEachOthers.SMALL_MEDIUM};
`;

const NavClickButton = styled.button`
  cursor: pointer;
  background: none;
  border: 1px solid #fffcfc;
  border-radius: 4px;
  height: ${ElementSizeByHeight.SMALL};
  font-size: ${FontSize.MEDIUM_SMALL};
  font-weight: 700;
  white-space: nowrap;
  line-height: ${ElementSizeByHeight.SMALL};
  padding: 0 10px;
  color: #fffcfc;
  transition-property: color, opacity, border-color;
  transition-duration: 400ms, 400ms, 400ms;

  &:hover {
    color: #f3f1f195;
    border-color: #f3f1f198;
  }
`;

export default {
  NavBar,
  Logo,
  NavFirstGroup,
  NavButton,
  NavSecondGroup,
  NavClickButton,
  NavSpan,
};
