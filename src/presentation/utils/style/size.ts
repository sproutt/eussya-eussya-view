export enum Size {
  LARGE = "LARGE",
  MEDIUM = "MEDIUM",
  SMALL = "SMALL",
  EXTRASMALL = "EXTRASMALL"
}

export enum FontSize {
  LARGE = "1.75rem",
  MEDIUM = "1.25rem",
  MEDIUM_SMALL = "1rem",
  SMALL = "0.75rem"
}

export enum ElementSizeByHeight {
  LARGE = "5rem",
  MEDIUM = "3.5rem",
  SMALL = "2rem"
}

export enum ElementDistanceEachOthers {
  SMALL = "8px",
  MEDIUM = "16px",
  LARGE = "24px",
  EXTRASMALL = "4px"
}

export type SizeKey =
  | keyof typeof FontSize
  | keyof typeof ElementSizeByHeight
  | keyof typeof ElementDistanceEachOthers;

export class SizeSeparator {
  static asFont(sizekey: SizeKey | keyof typeof FontSize): string {
    //type guard
    if ((sizekey as keyof typeof FontSize) in FontSize)
      return FontSize[sizekey as keyof typeof FontSize];
    return FontSize.MEDIUM;
  }
  static asElementHeight(
    sizekey: SizeKey | keyof typeof ElementSizeByHeight
  ): string {
    //type guard
    if ((sizekey as keyof typeof ElementSizeByHeight) in ElementSizeByHeight)
      return ElementSizeByHeight[sizekey as keyof typeof ElementSizeByHeight];
    return ElementSizeByHeight.MEDIUM;
  }
  static asDistanceEachOthers(
    sizekey: SizeKey | keyof typeof ElementDistanceEachOthers
  ): string {
    //type guard
    if (
      (sizekey as keyof typeof ElementDistanceEachOthers) in
      ElementDistanceEachOthers
    )
      return ElementDistanceEachOthers[
        sizekey as keyof typeof ElementDistanceEachOthers
      ];
    return ElementDistanceEachOthers.MEDIUM;
  }
}
