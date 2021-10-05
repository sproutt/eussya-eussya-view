import { AuthErrorCode } from "./../../enum/auth-error-code";
import { OK, CREATED } from "http-status-codes";
import { PublicErrorMessage } from "./../../enum/public-error-message";
import { MissionErrorMessage } from "./../../enum/mission-error-message";
import Mission from "core/entity/mission";
import MissionRepository from "core/use-case/mission-repository";
import MissionApiProvider from "data/http/mission.api";
import RepoResponseType from "data/response-type/repo-response";
import { MissionErrorCode } from "enum/mission-error-code";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CancelTokenSource } from "axios";
import type {AxiosError} from "axios"

export default class MissonRepositoryImpl implements MissionRepository {
  constructor(private api: MissionApiProvider) {}

  async postMission(mission: Mission) {
    try {
      let result = await this.api.postMisson(mission);
      return new RepoResponseType<undefined>(result.status === CREATED, "");
    } catch (error) {
      const {response} = error as AxiosError<{code:string}>
      if (!(error && response)) {
        return new RepoResponseType<undefined>(
          false,
          PublicErrorMessage.UNKNOWN_ERROR
        );
      }
      if (response.status === 404)
        return new RepoResponseType<undefined>(
          false,
          PublicErrorMessage.REQUEST_FAIL
        );
      if (response.data.code === MissionErrorCode.NOT_DAWN)
        return new RepoResponseType<undefined>(
          false,
          MissionErrorMessage.NOT_DAWN
        );
      if (response.data.code === AuthErrorCode.NOT_USER)
        return new RepoResponseType<undefined>(false, AuthErrorCode.NOT_USER);
      return new RepoResponseType<undefined>(
        false,
        PublicErrorMessage.UNKNOWN_ERROR
      );
    }
  }

  async getTodayMission(
    memberId: string,
    date: string,
    CancelTokenSource?: CancelTokenSource
  ) {
    try {
      let result = await this.api.GetTodayMisson(
        date,
        memberId,
        CancelTokenSource
      );
      if (result.status === OK) return result.data;
      throw new Error();
    } catch (error) {
      throw error;
    }
  }

  async updateMission(missionId: number, mission: Mission) {
    try {
      let result = await this.api.updateMission(missionId, mission);
      if (result.status === OK) return true;
      return false;
    } catch (error) {
      return false;
    }
  }

  async startMission(missionId: number) {
    try {
      let result = await this.api.startMission(missionId);
      if (result.status === OK) return true;
      return false;
    } catch (error) {
      return false;
    }
  }
  async pauseMisson(missionId: number) {
    try {
      let result = await this.api.pauseMission(missionId);
      if (result.status === OK) return true;
      return false;
    } catch (error) {
      return false;
    }
  }
  async completeMission(missionId: number) {
    try {
      let result = await this.api.completeMission(missionId);
      if (result.status === OK) return true;
      return false;
    } catch (error) {
      return false;
    }
  }

  async removeMission(missionId: number) {
    try {
      let result = await this.api.removeMission(missionId);
      if (result.status === OK) return true;
      return false;
    } catch (error) {
      return false;
    }
  }

  async postResult(
    missionId: number,
    result: string,
    CancelTokenSource?: CancelTokenSource
  ) {
    try {
      const response = await this.api.postResult(
        missionId,
        result,
        CancelTokenSource
      );
      if (response.status !== OK)
        return new RepoResponseType<undefined>(response.status === OK, "");
      return new RepoResponseType<undefined>(response.status === OK, "");
    } catch (error) {
      return new RepoResponseType<undefined>(false, "");
    }
  }
}
