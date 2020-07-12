import RepoResponseType from "data/response-type/repo-response";
import MissionRepository from "core/use-case/mission-repository";
import Mission from "core/entity/mission";

export default class MissionService {
  constructor(private repo: MissionRepository) {}

  async postMission(
    title: string,
    goalTime: string,
    contents?: string
  ): Promise<RepoResponseType<undefined>> {
    return await this.repo.postMission(new Mission(title, goalTime, contents));
  }
}
