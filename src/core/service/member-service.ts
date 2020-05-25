import { MemberRepository } from "core/use-case/member-repository";
import { Member } from "core/entity/member";

export class MemberService {
  private repo: MemberRepository;

  constructor(repo: MemberRepository) {
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
    const upperCode = code.toUpperCase();
    return await this.repo.authEmail(email, upperCode);
  }

  async login(email: string, password: string) {
    return await this.repo.login(new Member(email, undefined, password));
  }

  async checkDuplicateOfEmail(memberId: string) {
    return await this.repo.checkDuplicateOfEmail(memberId);
  }

  async checkDuplicateOfNickName(nickName: string) {
    return await this.repo.checkDuplicateOfNickName(nickName);
  }
}
