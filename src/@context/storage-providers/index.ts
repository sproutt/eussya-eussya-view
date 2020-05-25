import { BrowserStorage } from "./../../data/browser-storage/index";
import { JWTTokenMapper } from "data/browser-storage/mapper/jwt-token-mapper";
import { BrowserStorageKey } from "enum/browser-storage-key";
import { JWTToken } from "core/entity/jwt-token";
//여러개의 storage를 이용할 때 의존성을 주입하는 곳
export class StorageProviderDependencies {
  public readonly JWTTokenStorage: BrowserStorage<JWTToken>;
  // eslint-disable-next-line
  constructor() {
    this.JWTTokenStorage = new BrowserStorage<JWTToken>(
      BrowserStorageKey.TOKEN,
      new JWTTokenMapper()
    );
  }
}
