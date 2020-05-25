import { Entity } from "./index";
export class JWTToken implements Entity {
  constructor(public readonly token?: string) {}
}
