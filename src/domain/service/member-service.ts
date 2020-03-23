import { MemberRepositoryType } from "domain/use-case/member-repository-type";
import { Member } from "entity/member";

export class MemberService {
  private repo: MemberRepositoryType;

  constructor(repo: MemberRepositoryType) {
    this.repo = repo;
  }

  async signUp(
    email: string,
    nickName: string,
    password: string
  ): Promise<boolean> {
    if (await this.repo.signUp(new Member(email, nickName, password))) {
      return await this.repo.sendMail(new Member(email));
    }
    return false;
  }
}
