import RepoResponseType from "data/response-type/repo-response";
import MissionRepository from "core/use-case/mission-repository";
import Mission from "core/entity/mission";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CancelTokenSource } from "axios";

export default class MissionService {
  constructor(private repo: MissionRepository) {}

  async postMission(
    title: string,
    goalTime: string,
    contents?: string
  ): Promise<RepoResponseType<undefined>> {
    return await this.repo.postMission(new Mission(title, goalTime, contents));
  }

  async getTodayMission(
    memberId: string,
    date: string,
    CancelTokenSource?: CancelTokenSource
  ) {
    return await this.repo.getTodayMission(memberId, date, CancelTokenSource);
  }

  async updateMission(
    missionId: number,
    title: string,
    goalTime: string,
    contents?: string
  ) {
    return await this.repo.updateMission(
      missionId,
      new Mission(title, goalTime, contents)
    );
  }

  async start(missionId: number) {
    return await this.repo.startMission(missionId);
  }
  async pause(missionId: number) {
    return await this.repo.pauseMisson(missionId);
  }
  async complete(missionId: number) {
    return await this.repo.completeMission(missionId);
  }
  async remove(missionId: number) {
    return await this.repo.removeMission(missionId);
  }
}
