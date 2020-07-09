import { BrowserStorage } from "../browser-storage/index";
import { MemberRepository } from "core/use-case/member-repository";
import { MemberApiProvider } from "data/http/member-api";
import { Member } from "core/entity/member";
import HttpStatus from "http-status-codes";
import { JWTToken } from "core/entity/jwt-token";
export class MemberRepositoryImpl implements MemberRepository {
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
      if (!result.headers["Authorization"]) return false;
      this.storage.set(result.headers["Authorization"]);
      return result.status === HttpStatus.OK;
    } catch (error) {
      return false;
    }
  }

  async checkDuplicateOfEmail(memberId: string) {
    try {
      const result = await this.api.checkDuplicateEmail(memberId);
      return result.status === HttpStatus.OK;
    } catch (error) {
      return false;
    }
  }

  async checkDuplicateOfNickName(nickName: string) {
    try {
      const result = await this.api.checkDuplicateNickName(nickName);
      return result.status === HttpStatus.OK;
    } catch (error) {
      return false;
    }
  }
}