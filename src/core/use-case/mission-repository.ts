import Mission from "core/entity/mission";
import RepoResponseType from "data/response-type/repo-response";

export default interface MissionRepository {
  postMission(mission: Mission): Promise<RepoResponseType<undefined>>;
}
