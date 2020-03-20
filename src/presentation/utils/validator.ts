export class Validator {
  static correctEmailFormat(email: string) {
    return email.indexOf("@") !== -1;
  }
  static correctPasswordFormat(password: string) {
    const passwordRegex = /^((?=.*[a-zA-Z])(?=.*[0-9])|(?=.*[^a-zA-Z0-9])(?=.*[0-9])|(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]))[a-zA-Z0-9!@#$%^&*()_+=`\\|{}[\];:"'?/><.,~-]{6,15}$/;
    return passwordRegex.test(password);
  }

  static correctNickNameFormat(nickName: string) {
    return nickName.length <= 10;
  }
}
