export class Parser {
  static getQueryStringObject(key: string) {
    if (key[0] !== "?") return {};
    const queryString: string = key.slice(1);
    const queryStrings = queryString.split("&");
    const queryStringObject = queryStrings.reduce((pre, next) => {
      const key = next.split("=")[0];
      const value = next.split("=")[1];
      const obj = { [key]: value };
      return { ...pre, ...obj };
    }, {});
    return queryStringObject;
  }
}
