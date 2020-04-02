import { MemberRepositoryImpl } from "domain/use-case/member-repository-Impl";
import { Member } from "entity/member";

export class MemberService {
  private repo: MemberRepositoryImpl;

  constructor(repo: MemberRepositoryImpl) {
    this.repo = repo;
  }

  async signUp(
    email: string,
    nickName: string,
    password: string
  ): Promise<boolean> {
    return await this.repo.signUp(new Member(email, nickName, password));
  }

  async checkCode(email: string, code: string) {
    return await this.repo.authEmail(email, code);
  }
}
