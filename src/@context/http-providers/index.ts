import { MemberApiProvider } from "data/http/member-api";
//여러대의 api 서버를 운영할 때 의존성을 주입하는 곳
export class HttpProviderDependencies {
  public readonly memberApi: MemberApiProvider;
  constructor() {
    this.memberApi = new MemberApiProvider();
  }
}
