import { Entity } from "./index";
class ResponseEntity<T> implements Entity {
  constructor(private data: T, public readonly errorMessage?: string) {}
  getData(): T {
    return this.data;
  }
}

export default ResponseEntity;
