import { RepositoryContainer } from "@context/repositories";
import { MemberService } from "domain/service/member-service";

//서비스 의존성 주입
export class ServiceDependencies {
  public readonly member: MemberService;
  constructor(repositories: RepositoryContainer) {
    this.member = new MemberService(repositories.memberRepository);
  }
}
