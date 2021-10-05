import { isNull, isUndefined } from "util";

export class Validator {
  static correctEmailFormat(email?: string) {
    const emailRegex = /^\S{1,}@\S{1,}\.{1}\S{1,}$/;
    return !(isUndefined(email) || isNull(email)) && emailRegex.test(email);
  }
  static correctPasswordFormat(password?: string) {
    const passwordRegex = /^((?=.*[a-zA-Z])(?=.*[0-9])|(?=.*[^a-zA-Z0-9])(?=.*[0-9])|(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]))[a-zA-Z0-9!@#$%^&*()_+=`\\|{}[\];:"'?/><.,~-]{6,15}$/;
    return (
      !(isUndefined(password) || isNull(password)) &&
      passwordRegex.test(password)
    );
  }

  static correctNickNameFormat(nickName?: string) {
    return (
      !(isUndefined(nickName) || isNull(nickName)) &&
      nickName.length <= 10 &&
      nickName.length > 0
    );
  }

  static isSamePassword = (password?: string) => (repassword?: string) => {
    return (
      !(isUndefined(password) || isNull(password)) &&
      !(isUndefined(repassword) || isNull(repassword)) &&
      password === repassword
    );
  };
}
