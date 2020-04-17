import { Entity } from "./index";
import { isUndefined, isNull } from "util";

export class Member implements Entity {
  constructor(
    public readonly email?: string,
    public readonly nickName?: string,
    public readonly password?: string
  ) {}

  static checkEmailFormat(email: string) {
    const emailRegex = /^\S{1,}@\S{1,}\.{1}\S{1,}$/;
    return !(isUndefined(email) || isNull(email)) && emailRegex.test(email);
  }

  static checkPasswordFormat(password: string) {
    const passwordRegex = /^((?=.*[a-zA-Z])(?=.*[0-9])|(?=.*[^a-zA-Z0-9])(?=.*[0-9])|(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]))[a-zA-Z0-9!@#$%^&*()_+=`\\|{}[\];:"'?/><.,~-]{6,15}$/;
    return (
      !(isUndefined(password) || isNull(password)) &&
      passwordRegex.test(password)
    );
  }

  static checkNickNameFormat(nickName: string) {
    return (
      !(isUndefined(nickName) || isNull(nickName)) &&
      nickName.length <= 10 &&
      nickName.length > 0
    );
  }
}
