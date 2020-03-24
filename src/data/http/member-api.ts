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
      return await this.axiosWrapper.getAxios().post("/members", member);
    } catch (error) {
      throw error;
    }
  }

  async sendMail(member: Member): Promise<AxiosResponse> {
    try {
      return await this.axiosWrapper
        .getAxios()
        .post("/email-auth", member.email);
    } catch (error) {
      throw error;
    }
  }
}
