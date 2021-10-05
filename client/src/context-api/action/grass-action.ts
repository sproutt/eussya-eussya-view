import { MissionStatus } from "enum/mission-status";
import { Dispatch } from "react";

export type Grass = Map<
  string,
  { year: number; month: number; date: number; count: number; day: number }
>;

export type GrassAction = {
  type: "SAVE";
  data: {
    year: number;
    month: number;
    date: number;
    status: MissionStatus;
  }[];
};

export type GrassDispatch = Dispatch<GrassAction>;
