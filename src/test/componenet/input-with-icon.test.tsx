import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { InputWithIcon } from "presentation/molecule/input-with-icon";
import { Size } from "utils/style/size";

describe("<InputWithIcon/>", () => {
  it("스냅샷", () => {
    const utils = render(<InputWithIcon size={Size.MEDIUM}></InputWithIcon>);
    expect(utils.container).toMatchSnapshot();
  });
  it("컴포넌트가 보인다.", () => {
    const renders = render(
      <InputWithIcon size={Size.MEDIUM} name={"hello"}></InputWithIcon>
    );
    renders.getByText("hello");
  });
  it("인풋 태그가 존재한다.", () => {
    const renders = render(
      <InputWithIcon size={Size.MEDIUM} name={"hello"}></InputWithIcon>
    );
    const input = renders.container.querySelector("input");
    expect(input instanceof HTMLInputElement).toBe(true);
  });
  it("인풋 내용이 변경 된다.", () => {
    const renders = render(
      <InputWithIcon size={Size.MEDIUM} name={"hello"}></InputWithIcon>
    );
    const input = renders.container.querySelector("input");
    expect(input instanceof HTMLInputElement).toBe(true);
    fireEvent.change(input as HTMLInputElement, {
      target: { value: "email@email.com" }
    });
    expect(input!.value).toBe("email@email.com");
  });
});
