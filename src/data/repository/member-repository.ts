import { BrowserStorage } from "./../browser-storage/index";
import { MemberRepositoryImpl } from "domain/use-case/member-repository-Impl";
import { MemberApiProvider } from "data/http/member-api";
import { Member } from "entity/member";
import HttpStatus from "http-status-codes";
import { JWTToken } from "entity/jwt-token";
export class MemberRepository implements MemberRepositoryImpl {
  constructor(
    private api: MemberApiProvider,
    private storage: BrowserStorage<JWTToken>
  ) {}

  async signUp(member: Member) {
    try {
      const result = await this.api.signUp(member);

      return result.status === HttpStatus.CREATED;
    } catch (error) {
      return false;
    }
  }

  async authEmail(email: string, code: string) {
    try {
      const result = await this.api.authEmail(email, code);
      return result.status === HttpStatus.OK;
    } catch (error) {
      return false;
    }
  }

  async login(member: Member) {
    try {
      const result = await this.api.login(member);
      if (!result.headers["authorization"]) return false;
      this.storage.set(result.headers["authorization"]);
      return result.status === HttpStatus.OK;
    } catch (error) {
      return false;
    }
  }
}
