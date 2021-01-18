import { AccessToken } from "../../../core/entity/access-token";
import { BrowserStorageMapperImpl } from "./../browser-storage-mapper";

export class JWTTokenMapper implements BrowserStorageMapperImpl<AccessToken> {
  toJson(target: AccessToken): string {
    return JSON.stringify({
      accessToken: target.accessToken!,
      refreshToken: target.refreshToken!,
    });
  }

  fromJson(jsonString: string): AccessToken {
    let json = JSON.parse(jsonString);
    if (!json) return new AccessToken("", "");
    return new AccessToken(json.accessToken, json.refreshToken);
  }
}
