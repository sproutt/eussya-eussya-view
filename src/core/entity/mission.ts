import { Entity } from "./index";
export default class Mission implements Entity {
  constructor(
    public readonly title: string,
    public readonly goalTime: string,
    public readonly contents?: string
  ) {}
}
