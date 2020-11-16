export enum Size {
  EXTRA_LARGE = "EXTRA_LARGE",
  LARGE = "LARGE",
  MEDIUM_LARGE = "MEDIUM_LARGE",
  MEDIUM = "MEDIUM",
  MEDIUM_SMALL = "MEDIUM_SMALL",
  SMALL = "SMALL",
  EXTRASMALL = "EXTRA_SMALL",
  TWO_EXTRA_SMALL = "TWO_EXTRA_SMALL",
  SMALL_MEDIUM = "SMALL_MEDIUM",
  MEDIUM_MEDIUM_LARGE = "MEDIUM_MEDIUM_LARGE",
  SMALL_SMALL = "SMALL_SMALL",
}

export enum StaticSize {
  NAV_HEIGHT = "3.75rem",
}

export enum FontSize {
  EXTRA_LARGE = "28px",
  LARGE = "24px",
  MEDIUM = "20px",
  MEDIUM_SMALL = "18px",
  SMALL_MEDIUM = "16px",
  SMALL = "14px",
  EXTRA_SMALL = "12px",
}

export enum ElementSizeByHeight {
  EXTRA_LARGE = "5.5rem",
  LARGE = "4.5rem",
  MEDIUM_LARGE = "4rem",
  MEDIUM_MEDIUM_LARGE = "3.75rem",
  MEDIUM = "3.5rem",
  MEDIUM_SMALL = "3rem",
  SMALL = "2.5rem",
  EXTRA_SMALL = "2rem",
  TWO_EXTRA_SMALL = "1.5rem",
}

export enum ElementDistanceEachOthers {
  SMALL = "8px",
  SMALL_MEDIUM = "10px",
  MEDIUM_SMALL = "12px",
  MEDIUM = "16px",
  LARGE = "24px",
  SMALL_SMALL = "6px",
  EXTRA_SMALL = "4px",
}

export type SizeKey =
  | keyof typeof FontSize
  | keyof typeof ElementSizeByHeight
  | keyof typeof ElementDistanceEachOthers;

export class SizeSeparator {
  static asFont(sizekey: SizeKey | keyof typeof FontSize): string {
    //type guard
    if (sizekey in FontSize) return FontSize[sizekey as keyof typeof FontSize];
    return FontSize.MEDIUM;
  }
  static asElementHeight(
    sizekey: SizeKey | keyof typeof ElementSizeByHeight
  ): string {
    //type guard
    if (sizekey in ElementSizeByHeight)
      return ElementSizeByHeight[sizekey as keyof typeof ElementSizeByHeight];
    return ElementSizeByHeight.MEDIUM;
  }
  static asDistanceEachOthers(
    sizekey: SizeKey | keyof typeof ElementDistanceEachOthers
  ): string {
    //type guard
    if (sizekey in ElementDistanceEachOthers)
      return ElementDistanceEachOthers[
        sizekey as keyof typeof ElementDistanceEachOthers
      ];
    return ElementDistanceEachOthers.MEDIUM;
  }
}
