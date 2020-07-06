export enum Size {
  EXTRA_LARGE = "EXTRA_LARGE",
  LARGE = "LARGE",
  MEDIUM_LARGE = "MEDIUM_LARGE",
  MEDIUM = "MEDIUM",
  MEDIUM_SMALL = "MEDIUM_SMALL",
  SMALL = "SMALL",
  EXTRASMALL = "EXTRA_SMALL",
  TWO_EXTRA_SMALL = "TWO_EXTRA_SMALL",
}

export enum FontSize {
  EXTRA_LARGE = "2.5rem",
  LARGE = "2.0rem",
  MEDIUM = "1.5rem",
  MEDIUM_SMALL = "1.25rem",
  SMALL = "1rem",
  EXTRA_SMALL = "0.75rem",
}

export enum ElementSizeByHeight {
  EXTRA_LARGE = "5.5rem",
  LARGE = "4.5rem",
  MEDIUM_LARGE = "4rem",
  MEDIUM = "3.5rem",
  MEDIUM_SMALL = "3rem",
  SMALL = "2.5rem",
  EXTRA_SMALL = "2rem",
  TWO_EXTRA_SMALL = "1.5rem",
}

export enum ElementDistanceEachOthers {
  SMALL = "8px",
  MEDIUM = "16px",
  LARGE = "24px",
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
