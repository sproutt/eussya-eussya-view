//https://medium.com/banksalad/safe-localstorage-using-typescdript-eac147f59ae 참고
export interface BrowserStorageMapper<T> {
  fromJson(json: any): T;
  toJson(target: T): any;
}
