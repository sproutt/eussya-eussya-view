import { MemberRepositoryImpl } from "domain/use-case/member-repository-type";
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
    if (await this.repo.signUp(new Member(email, nickName, password))) {
      return await this.repo.sendMail(new Member(email));
    }
    return false;
  }
}
