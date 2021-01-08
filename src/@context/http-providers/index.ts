import OAuthApiProvider from "data/http/oauth-api";
import SystemApiProvider from "data/http/system-api";
import { MemberApiProvider } from "data/http/member-api";
import MissionApiProvider from "data/http/mission.api";
//여러대의 api 서버를 운영할 때 의존성을 주입하는 곳
export class HttpProviderDependencies {
  public readonly memberApi: MemberApiProvider;
  public readonly systemApi: SystemApiProvider;
  public readonly missionApi: MissionApiProvider;
  public readonly oauthApi: OAuthApiProvider;
  constructor() {
    this.memberApi = new MemberApiProvider();
    this.systemApi = new SystemApiProvider();
    this.missionApi = new MissionApiProvider();
    this.oauthApi = new OAuthApiProvider();
  }
}
