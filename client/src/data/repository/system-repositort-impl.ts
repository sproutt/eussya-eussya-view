import HttpStatus from "http-status-codes";
import SystemRepository from "core/use-case/system-repository";
import SystemApiProvider from "data/http/system-api";

export class SystemRopositoryImpl implements SystemRepository {
  private api: SystemApiProvider;
  constructor(api: SystemApiProvider) {
    this.api = api;
  }
  async getMotivatinalPhrase(): Promise<string> {
    try {
      let response = await this.api.getMotivatedText();
      if (response.status !== HttpStatus.OK) throw new Error("error");
      return response.data.text;
    } catch (error) {
      throw error;
    }
  }
}
