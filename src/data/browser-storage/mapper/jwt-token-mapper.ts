import { JWTToken } from "./../../../entity/jwt-token";
import { BrowserStorageMapperImpl } from "./../browser-storage-mapper";

export class JWTTokenMapper implements BrowserStorageMapperImpl<JWTToken> {
  toJson(target: JWTToken): string {
    return JSON.stringify(target);
  }

  fromJson(json: string): JWTToken {
    return JSON.parse(json) as JWTToken;
  }
}
