import * as React from "react";
import { render } from "@testing-library/react";
import { RoundButton } from "presentation/atom/button/round-button";

describe("<RoundButton/>", () => {
  it("스냅샷", () => {
    const utils = render(<RoundButton>hello</RoundButton>);
    expect(utils.container).toMatchSnapshot();
  });
  it("버튼이 보이는지", () => {
    const { getByText } = render(<RoundButton>hello</RoundButton>);
    getByText("hello");
  });
});
