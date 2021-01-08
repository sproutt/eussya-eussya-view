import { RepositoryContainer } from "@context/repositories";
import { MemberService } from "core/service/member-service";
import SystemService from "core/service/system-service";
import MissionService from "core/service/mission-service";
import OAuthService from "core/service/oauth-service";

//서비스 의존성 주입
export class ServiceDependencies {
  public readonly member: MemberService;
  public readonly system: SystemService;
  public readonly mission: MissionService;
  public readonly oauth: OAuthService;
  constructor(repositories: RepositoryContainer) {
    this.member = new MemberService(repositories.memberRepository);
    this.system = new SystemService(repositories.systemRepository);
    this.mission = new MissionService(repositories.missionRepository);
    this.oauth = new OAuthService(repositories.oauthRepository);
  }
}
