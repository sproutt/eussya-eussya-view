import axios, { AxiosStatic } from "axios";
import { StorageProviderDependencies } from "@context/storage-providers";

export class AxiosWrapper {
  private axios: AxiosStatic;
  private storage: StorageProviderDependencies;
  constructor() {
    this.axios = axios;
    this.initialize();
    this.storage = new StorageProviderDependencies();
  }

  private initialize(): void {
    this.axios.defaults.headers.common["Content-Type"] = "application/json";
    this.axios.defaults.headers.common["Accept"] = "application/json";
  }

  public getAxios() {
    const accessToken = this.storage.AccessTokenStorage.get();
    if (!(accessToken && accessToken.accessToken)) return this.axios.create();
    return this.axios.create({
      headers: {
        Authorization: accessToken.accessToken,
      },
    });
  }

  public getAxiosWithPlainText() {
    const accessToken = this.storage.AccessTokenStorage.get();
    if (!(accessToken && accessToken.accessToken))
      return this.axios.create({
        headers: {
          "Content-Type": "plain/text; charset=utf-8",
        },
      });

    return this.axios.create({
      headers: {
        Authorization: accessToken.accessToken,
        "Content-Type": "plain/text; charset=utf-8",
      },
    });
  }
}
