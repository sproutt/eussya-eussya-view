import { AuthErrorCode } from "./../../enum/auth-error-code";
import { OK } from "http-status-codes";
import { PublicErrorMessage } from "./../../enum/public-error-message";
import { MissionErrorMessage } from "./../../enum/mission-error-message";
import Mission from "core/entity/mission";
import MissionRepository from "core/use-case/mission-repository";
import MissionApiProvider from "data/http/mission.api";
import RepoResponseType from "data/response-type/repo-response";
import { MissionErrorCode } from "enum/mission-error-code";

export default class MissonRepositoryImpl implements MissionRepository {
  constructor(private api: MissionApiProvider) {}

  async postMission(mission: Mission) {
    try {
      let result = await this.api.postMisson(mission);
      return new RepoResponseType<undefined>(result.status === OK, "");
    } catch (error) {
      if (!(error && error.response)) {
        return new RepoResponseType<undefined>(
          false,
          PublicErrorMessage.UNKNOWN_ERROR
        );
      }
      if (error.response.status === 404)
        return new RepoResponseType<undefined>(
          false,
          PublicErrorMessage.REQUEST_FAIL
        );
      if (error.response.data.errorCode === MissionErrorCode.NOT_DAWN)
        return new RepoResponseType<undefined>(
          false,
          MissionErrorMessage.NOT_DAWN
        );
      if (error.response.data.errorCode === AuthErrorCode.NOT_USER)
        return new RepoResponseType<undefined>(false, AuthErrorCode.NOT_USER);
      return new RepoResponseType<undefined>(
        false,
        PublicErrorMessage.UNKNOWN_ERROR
      );
    }
  }
}
