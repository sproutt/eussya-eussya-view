import { BrowserStorageMapperImpl } from "./browser-storage-mapper";
import { BrowserStorageKey } from "enum/browser-storage-key";
import { BrowserStorageHelper } from "./browser-storage-helper";

export class BrowserStorage<T> {
  private key: BrowserStorageKey;
  private mapper: BrowserStorageMapperImpl<T>;

  constructor(key: BrowserStorageKey, mapper: BrowserStorageMapperImpl<T>) {
    this.key = key;
    this.mapper = mapper;
  }

  get(): T {
    return this.mapper.fromJson(BrowserStorageHelper.get(this.key));
  }

  set(target: T, temporary: boolean = false): void {
    BrowserStorageHelper.set(this.key, this.mapper.toJson(target), temporary);
  }

  clear(): void {
    BrowserStorageHelper.clear(this.key);
  }
}

//https://medium.com/banksalad/safe-localstorage-using-typescdript-eac147f59ae 참고
