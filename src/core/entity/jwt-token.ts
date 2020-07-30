import { Entity } from "./index";
import jwt from "jsonwebtoken";
export class JWTToken implements Entity {
  constructor(public readonly token?: string) {}
  decodeTokenData(): any {
    return jwt.decode(this.token!);
  }
}
