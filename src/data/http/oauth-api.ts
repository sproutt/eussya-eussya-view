import { AxiosWrapper } from "./axios/axios-wrapper";
import { AxiosResponse } from "axios";
class OAuthApiProvider {
  private axiosWrapper: AxiosWrapper;
  constructor() {
    this.axiosWrapper = new AxiosWrapper();
  }

  async authorizeTo(platform: string, code: string): Promise<AxiosResponse> {
    try {
      return await this.axiosWrapper
        .getAxios()
        .post(process.env.REACT_APP_HOST + `/social/login/${platform}`, {
          code,
        });
    } catch (error) {
      throw error;
    }
  }
}

export default OAuthApiProvider;
