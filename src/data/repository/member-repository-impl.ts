import { BrowserStorage } from "../browser-storage/index";
import { MemberRepository } from "core/use-case/member-repository";
import { MemberApiProvider } from "data/http/member-api";
import { Member } from "core/entity/member";
import HttpStatus from "http-status-codes";
import { JWTToken } from "core/entity/jwt-token";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CancelTokenSource } from "axios";

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
      if (!result.headers["authorization"]) return false;
      this.storage.set(new JWTToken(result.headers["authorization"]));
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

  async getMembers(memberId: number, CancelTokenSource?: CancelTokenSource) {
    try {
      const result = await this.api.getMembers(memberId, CancelTokenSource);
      if (result.status === HttpStatus.OK) return result;
      throw new Error();
    } catch (error) {
      throw error;
    }
  }

  isLogined() {
    let token = this.storage.get();
    if (token.token) return true;
    return false;
  }

  getTokenInfo() {
    let token = this.storage.get();
    return token.decodeTokenData();
  }

  getToken() {
    return this.storage.get().token!;
  }

  logout() {
    this.storage.clear();
    return true;
  }
}
