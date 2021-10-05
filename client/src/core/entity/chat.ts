import { Entity } from "./index";
export class Chat implements Entity {
  constructor(
    public readonly userName?: String,
    public readonly content?: String,
    public readonly sentTime?: Date
  ) {}
}
