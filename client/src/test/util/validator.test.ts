import { Validator } from "utils/validator";

describe("Validator class email", () => {
  it("이메일에 @가 있을 때 ture", () => {
    const email = "dada@adada.cad";
    expect(Validator.correctEmailFormat(email)).toEqual(true);
  });
  it("이메일에 @가 없을 때 false", () => {
    const email = "dadaadada.cad";
    expect(Validator.correctEmailFormat(email)).toEqual(false);
  });
  it("이메일의 값이 null 일 때 false", () => {
    expect(Validator.correctEmailFormat(null)).toEqual(false);
  });
  it("이메일의 값이 공백일 때 false", () => {
    const email = "         ";
    expect(Validator.correctEmailFormat(email)).toEqual(false);
  });
  it("이메일의 값의 길이가 4일때 false", () => {
    const email = "1@a.";
    expect(Validator.correctEmailFormat(email)).toEqual(false);
  });
});

describe("Validator class password", () => {
  it("패스워드가 영문 숫자로 이루어신 8자일 때 true", () => {
    const password = "a1s2d3f4";
    expect(Validator.correctPasswordFormat(password)).toEqual(true);
  });
  it("패스워드가 영문 특수문자로 이루어신 8자일 때 true", () => {
    const password = "a!s@d#f$";
    expect(Validator.correctPasswordFormat(password)).toEqual(true);
  });
  it("패스워드가 특수문자 숫자로 이루어신 8자일 때 true", () => {
    const password = "1!2@3#4$";
    expect(Validator.correctPasswordFormat(password)).toEqual(true);
  });
  it("패스워드가 15자 초과일때 false", () => {
    const password = "1!2@3#4$5%6^7&8*9(";
    expect(Validator.correctPasswordFormat(password)).toEqual(false);
  });
  it("패스워드가 6자 미만일때 false", () => {
    const password = "1@2#";
    expect(Validator.correctPasswordFormat(password)).toEqual(false);
  });
  it("패스워드가 null 일 때 false", () => {
    expect(Validator.correctPasswordFormat(null)).toEqual(false);
  });
  it("패스워드에 공백문자가 있을 때 false", () => {
    const password = "asd f123";
    expect(Validator.correctPasswordFormat(password)).toEqual(false);
  });
});

describe("Validator class nickName", () => {
  it("이름의 길이가 10자 초과일때 false", () => {
    const nickName = "안녕하세요김기표입니다";
    expect(Validator.correctNickNameFormat(nickName)).toEqual(false);
  });
  it("이름형식이 한글 true", () => {
    const nickName = "안녕하세요김기표";
    expect(Validator.correctNickNameFormat(nickName)).toEqual(true);
  });
  it("이름형식이 영어 true", () => {
    const nickName = "kimgipyo";
    expect(Validator.correctNickNameFormat(nickName)).toEqual(true);
  });
  it("이름형식에 공백 true", () => {
    const nickName = "1!2@4 $5";
    expect(Validator.correctNickNameFormat(nickName)).toEqual(true);
  });
  it("이름이 null false", () => {
    expect(Validator.correctNickNameFormat(null)).toEqual(false);
  });
  it("이름이 공백으로만 false", () => {
    const nickName = "     ";
    expect(Validator.correctNickNameFormat(nickName)).toEqual(false);
  });
});
