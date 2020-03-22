import axios, { AxiosStatic } from "axios";

export class AxiosWrapper {
  private axios: AxiosStatic;
  constructor() {
    this.axios = axios;
    this.initialize();
  }

  private initialize(): void {
    this.axios.defaults.headers.common["Content-Type"] = "application/json";
    this.axios.defaults.headers.common["Accept"] = "application/json";
  }

  public getAxios() {
    return this.axios.create();
  }
}
