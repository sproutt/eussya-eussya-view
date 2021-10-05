import { Entity } from "./index";
import jwt from "jsonwebtoken";
export class AccessToken implements Entity {
  constructor(public readonly accessToken?: string,public readonly refreshToken?: string) {}
  decodeAccessTokenData(): any {
    return jwt.decode(this.accessToken!);
  }
}
