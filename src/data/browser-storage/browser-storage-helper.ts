import { BrowserStorageKey } from "enum/browser-storage-key";

export class BrowserStorageHelper {
  static get(key: BrowserStorageKey): string | null {
    return localStorage.getItem(key) || sessionStorage.getItem(key);
  }
  static set(key: BrowserStorageKey, value: string, temporary: boolean): void {
    if (temporary) {
      sessionStorage.setItem(key, value);
      return;
    }
    localStorage.setItem(key, value);
  }
  static clear(key: BrowserStorageKey): void {
    sessionStorage.removeItem(key);
    localStorage.removeItem(key);
  }
}
