import { BrowserStorage } from "./../../data/browser-storage/index";
import { JWTTokenMapper } from "data/browser-storage/mapper/jwt-token-mapper";
import { BrowserStorageKey } from "enum/browser-storage-key";
import { AccessToken } from "core/entity/access-token";
//여러개의 storage를 이용할 때 의존성을 주입하는 곳
export class StorageProviderDependencies {
  public readonly AccessTokenStorage: BrowserStorage<AccessToken>;
  // eslint-disable-next-line
  constructor() {
    this.AccessTokenStorage = new BrowserStorage<AccessToken>(
      BrowserStorageKey.TOKEN,
      new JWTTokenMapper()
    );
  }
}
