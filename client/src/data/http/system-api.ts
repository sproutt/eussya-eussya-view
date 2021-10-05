import { AxiosWrapper } from "./axios/axios-wrapper";
import { AxiosResponse } from "axios";
class SystemApiProvider {
  private axiosWrapper: AxiosWrapper;
  constructor() {
    this.axiosWrapper = new AxiosWrapper();
  }

  async getMotivatedText(): Promise<AxiosResponse<{text:string}>> {
    try {
      return await this.axiosWrapper
        .getAxios()
        .get(process.env.REACT_APP_HOST + "/phrase");
    } catch (error) {
      throw error;
    }
  }
}

export default SystemApiProvider;
