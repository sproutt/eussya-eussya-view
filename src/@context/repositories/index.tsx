import { HttpProviderDependencies } from "@context/http-providers";
import { StorageProviderDependencies } from "@context/storage-providers";
import { MemberRepositoryImpl } from "data/repository/member-repository-impl";
import { SystemRopositoryImpl } from "data/repository/system-repositort-impl";
import MissonRepositoryImpl from "data/repository/mission-repository-impl";

//레포지토리 의존성을 주입하는 곳
export class RepositoryContainer {
  public readonly memberRepository: MemberRepositoryImpl;
  public readonly systemRepository: SystemRopositoryImpl;
  public readonly missionRepository: MissonRepositoryImpl;
  constructor(
    apiProviders: HttpProviderDependencies,
    storageProviders: StorageProviderDependencies
  ) {
    this.memberRepository = new MemberRepositoryImpl(
      apiProviders.memberApi,
      storageProviders.AccessTokenStorage
    );
    this.systemRepository = new SystemRopositoryImpl(apiProviders.systemApi);
    this.missionRepository = new MissonRepositoryImpl(apiProviders.missionApi);
  }
}
