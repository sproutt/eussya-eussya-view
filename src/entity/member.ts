import { Entity } from "./index";
export class Member implements Entity {
  constructor(
    public readonly email: string,
    public readonly nickName?: string,
    public readonly password?: string
  ) {}
}
