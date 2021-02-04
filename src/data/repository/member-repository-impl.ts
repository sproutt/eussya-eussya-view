import { BrowserStorage } from "../browser-storage/index";
import { MemberRepository } from "core/use-case/member-repository";
import { MemberApiProvider } from "data/http/member-api";
import { Member } from "core/entity/member";
import HttpStatus from "http-status-codes";
import { JWTToken } from "core/entity/jwt-token";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CancelTokenSource } from "axios";
import RepoResponseType from "data/response-type/repo-response";
import { PublicErrorMessage } from "enum/public-error-message";
import { AuthErrorCode } from "enum/auth-error-code";
import { AuthErrorMessage } from "enum/auth-error-message";

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

  async sendEmail(email: string) {
    try {
      const result = await this.api.sendEmail(email);
      return result.status === HttpStatus.OK;
    } catch (error) {
      return false;
    }
  }

  async login(member: Member): Promise<RepoResponseType<undefined>> {
    try {
      const result = await this.api.login(member);
      console.log(result);
      if (!result.data["accessToken"])
        return new RepoResponseType<undefined>(
          false,
          AuthErrorMessage.NOT_COME_TOKEN
        );
      this.storage.set(new JWTToken(result.data["accessToken"]));
      return new RepoResponseType<undefined>(
        result.status === HttpStatus.OK,
        "message"
      );
    } catch (error) {
      if (!(error && error.response)) {
        return new RepoResponseType<undefined>(
          false,
          PublicErrorMessage.UNKNOWN_ERROR
        );
      }
      if (error.response.status === 404)
        return new RepoResponseType<undefined>(
          false,
          PublicErrorMessage.REQUEST_FAIL
        );
      if (error.response.data.code === AuthErrorCode.EMAIL_AUTH_PENDING)
        return new RepoResponseType<undefined>(
          false,
          AuthErrorMessage.EMAIL_AUTH_PENDING
        );
      return new RepoResponseType<undefined>(
        false,
        PublicErrorMessage.UNKNOWN_ERROR
      );
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
