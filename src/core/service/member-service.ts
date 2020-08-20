import { MemberRepository } from "core/use-case/member-repository";
import { Member } from "core/entity/member";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CancelTokenSource } from "axios";
import RepoResponseType from "data/response-type/repo-response";

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

  async login(
    email: string,
    password: string
  ): Promise<RepoResponseType<undefined>> {
    return await this.repo.login(new Member(email, undefined, password));
  }

  async checkDuplicateOfEmail(memberId: string) {
    return await this.repo.checkDuplicateOfEmail(memberId);
  }

  async checkDuplicateOfNickName(nickName: string) {
    return await this.repo.checkDuplicateOfNickName(nickName);
  }

  async getMembers(memberId: number, CancelTokenSource?: CancelTokenSource) {
    return await this.repo.getMembers(memberId, CancelTokenSource);
  }

  async sendEmail(email: string) {
    return await this.repo.sendEmail(email);
  }

  isLogined() {
    return this.repo.isLogined();
  }

  getTokenData() {
    return this.repo.getTokenInfo();
  }

  getToken() {
    return this.repo.getToken();
  }

  logout() {
    return this.repo.logout();
  }
}
