import { AxiosWrapper } from "./axios/axios-wrapper";
import { Member } from "entity/member";
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
      console.log(error.response);
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
      console.log(error);
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
}
