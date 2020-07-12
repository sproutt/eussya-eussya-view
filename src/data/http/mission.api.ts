import { AxiosWrapper } from "./axios/axios-wrapper";
import { AxiosResponse } from "axios";
import Mission from "core/entity/mission";

export default class MissionApiProvider {
  private axiosWrapper: AxiosWrapper;
  constructor() {
    this.axiosWrapper = new AxiosWrapper();
  }

  async postMisson(mission: Mission): Promise<AxiosResponse> {
    try {
      return await this.axiosWrapper
        .getAxios()
        .post(process.env.REACT_APP_HOST + "/missions", mission);
    } catch (error) {
      throw error;
    }
  }
}
