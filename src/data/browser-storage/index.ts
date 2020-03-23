import { BrowserStorageMapper } from "./browser-storage-mapper";
import { BrowserStorageKey } from "enum/browser-storage-key";
import { BrowserStorageHelper } from "./browser-storage-helper";

export class BrowserStorage<T> {
  private key: BrowserStorageKey;
  private mapper: BrowserStorageMapper<T>;

  constructor(key: BrowserStorageKey, mapper: BrowserStorageMapper<T>) {
    this.key = key;
    this.mapper = mapper;
  }

  get(): T {
    return this.mapper.fromJson(BrowserStorageHelper.get(this.key));
  }

  set(target: T, temporary: boolean = false): void {
    BrowserStorageHelper.set(this.key, this.mapper.toJson(target), temporary);
  }

  clear() {
    BrowserStorageHelper.clear(this.key);
  }
}

//https://medium.com/banksalad/safe-localstorage-using-typescdript-eac147f59ae 참고
