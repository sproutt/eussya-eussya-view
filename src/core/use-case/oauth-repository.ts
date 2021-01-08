import RepoResponseType from "data/response-type/repo-response";

export default interface OAuthRepository {
  accessOAuth(platfrom: string, code: string): Promise<RepoResponseType<any>>;
}
