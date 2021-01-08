import OAuthRepository from "core/use-case/oauth-repository";
class OAuthService {
  private repo: OAuthRepository;
  constructor(repo: OAuthRepository) {
    this.repo = repo;
  }

  async authorize(platfrom: string, code: string) {
    return this.repo.accessOAuth(platfrom, code);
  }
}

export default OAuthService;
