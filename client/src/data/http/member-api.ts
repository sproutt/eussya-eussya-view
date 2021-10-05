import { AxiosWrapper } from "./axios/axios-wrapper";
import { Member } from "core/entity/member";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Axios, { AxiosResponse, CancelTokenSource } from "axios";
export class MemberApiProvider {
  private axiosWrapper: AxiosWrapper;
  constructor() {
    this.axiosWrapper = new AxiosWrapper();
  }

  async signUp(member: Member): Promise<AxiosResponse> {
    try {
      return await this.axiosWrapper
        .getAxios()
        .post(process.env.REACT_APP_HOST + "/members", member);
    } catch (error) {
      throw error;
    }
  }

  async authEmail(email: string, code: string): Promise<AxiosResponse> {
    try {
      return await this.axiosWrapper
        .getAxios()
        .post(process.env.REACT_APP_HOST + "/email-auth", {
          memberId: email,
          authCode: code,
        });
    } catch (error) {
      throw error;
    }
  }

  async sendEmail(email: string): Promise<AxiosResponse> {
    try {
      return await this.axiosWrapper
        .getAxios()
        .post(process.env.REACT_APP_HOST + "/members/" + email + "/authcode");
    } catch (error) {
      throw error;
    }
  }

  async login(member: Member): Promise<AxiosResponse<{ accessToken: string,refreshToken:string }>> {
    try {
      return await this.axiosWrapper
        .getAxios()
        .post(process.env.REACT_APP_HOST + "/login", {
          memberId: member.memberId,
          password: member.password,
        });
    } catch (error) {
      throw error;
    }
  }

  async checkDuplicateEmail(memberId: string): Promise<AxiosResponse> {
    try {
      return await this.axiosWrapper
        .getAxios()
        .get(
          process.env.REACT_APP_HOST + "/members/validate/memberid/" + memberId
        );
    } catch (error) {
      throw error;
    }
  }

  async checkDuplicateNickName(nickName: string): Promise<AxiosResponse> {
    try {
      return await this.axiosWrapper
        .getAxios()
        .get(
          process.env.REACT_APP_HOST + "/members/validate/nickname/" + nickName
        );
    } catch (error) {
      throw error;
    }
  }

  async getMembers(
    memberId: number,
    CancelTokenSource?: CancelTokenSource
  ): Promise<AxiosResponse> {
    try {
      return await this.axiosWrapper
        .getAxios()
        .get(process.env.REACT_APP_HOST + "/members?exclude=" + memberId, {
          cancelToken: CancelTokenSource?.token,
        });
    } catch (error) {
      if (Axios.isCancel(error)) throw new Error("요청 취소");
      throw error;
    }
  }
}
