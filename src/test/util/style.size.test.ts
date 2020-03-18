import {
  Size,
  SizeSeparator,
  FontSize,
  ElementSizeByHeight,
  ElementDistanceEachOthers
} from "presentation/utils/style/size";

describe("SizeSeparator test", () => {
  it("입력이 LARGE 일때 FontSize는 LARGE", () => {
    expect(SizeSeparator.asFont(Size.LARGE)).toEqual(FontSize.LARGE);
  });
  it("입력이 Null 일때 FontSize는 MEDIUM", () => {
    expect(SizeSeparator.asFont(null)).toEqual(FontSize.MEDIUM);
  });
  it("입력이 SMALL 일때 ElementSizeByHeight는 SMALL", () => {
    expect(SizeSeparator.asElementHeight(Size.SMALL)).toEqual(
      ElementSizeByHeight.SMALL
    );
  });
  it("입력이 Null 일때 ElementSizeByHeight는 MEDIUM", () => {
    expect(SizeSeparator.asElementHeight(null)).toEqual(
      ElementSizeByHeight.MEDIUM
    );
  });
  it("입력이 MEDIUM 일때 ElementDistanceEachOthers는 MEDIUM", () => {
    expect(SizeSeparator.asDistanceEachOthers(Size.SMALL)).toEqual(
      ElementDistanceEachOthers.SMALL
    );
  });
  it("입력이 Null 일때 ElementDistanceEachOthers는 MEDIUM", () => {
    expect(SizeSeparator.asDistanceEachOthers(null)).toEqual(
      ElementDistanceEachOthers.MEDIUM
    );
  });
});
