import { JWTToken } from "../../../core/entity/jwt-token";
import { BrowserStorageMapperImpl } from "./../browser-storage-mapper";

export class JWTTokenMapper implements BrowserStorageMapperImpl<JWTToken> {
  toJson(target: JWTToken): string {
    return target.token!;
  }

  fromJson(json: string): JWTToken {
    return new JWTToken(json);
  }
}
