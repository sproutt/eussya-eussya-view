import { AxiosWrapper } from "./axios/axios-wrapper";
import { Member } from "core/entity/member";
import { AxiosResponse } from "axios";
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

  async login(member: Member): Promise<AxiosResponse> {
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
}
