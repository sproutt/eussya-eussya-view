import { MemberRepositoryType } from "domain/use-case/member-repository-type";
import { MemberApiProvider } from "data/http/member-api";
import { Member } from "entity/member";
import HttpStatus from "http-status-codes";
export class MemberRepository implements MemberRepositoryType {
  constructor(private api: MemberApiProvider) {}

  async signUp(member: Member) {
    try {
      const result = await this.api.signUp(member);
      return result.status === HttpStatus.CREATED;
    } catch (error) {
      return false;
    }
  }

  async sendMail(member: Member) {
    try {
      const result = await this.api.sendMail(member);
      return result.status === HttpStatus.OK;
    } catch (error) {
      return false;
    }
  }
}
