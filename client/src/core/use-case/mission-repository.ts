import Mission from "core/entity/mission";
import RepoResponseType from "data/response-type/repo-response";
import { CancelTokenSource } from "axios";

export default interface MissionRepository {
  postMission(mission: Mission): Promise<RepoResponseType<undefined>>;
  getTodayMission(
    memberId: string,
    date: string,
    CancelTokenSource?: CancelTokenSource
  ): Promise<any>;
  updateMission(missionId: number, mission: Mission): Promise<any>;
  startMission(missionId: number): Promise<any>;
  pauseMisson(missionId: number): Promise<any>;
  completeMission(missionId: number): Promise<any>;
  removeMission(missionId: number): Promise<any>;
  postResult(
    missionId: number,
    result: string,
    CancelTokenSource?: CancelTokenSource
  ): Promise<RepoResponseType<undefined>>;
}
