import HttpStatus from "http-status-codes";
import OAuthRepository from "core/use-case/oauth-repository";
import OAuthApiProvider from "data/http/oauth-api";
import RepoResponseType from "data/response-type/repo-response";

export class OAuthRopositoryImpl implements OAuthRepository {
  private api: OAuthApiProvider;
  constructor(api: OAuthApiProvider) {
    this.api = api;
  }
  async accessOAuth(
    platform: string,
    code: string
  ): Promise<RepoResponseType<any>> {
    try {
      let response = await this.api.authorizeTo(platform, code);
      if (response.status !== HttpStatus.OK) throw new Error("error");
      return new RepoResponseType(true, "success", response.data);
    } catch (error) {
      throw error;
    }
  }
}
