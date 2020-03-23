import { HttpProviderDependencies } from "@context/http-providers";
import { StorageProviderDependencies } from "@context/storage-providers";
import { MemberRepository } from "data/repository/member-repository";

//레포지토리 의존성을 주입하는 곳
export class RepositoriesDependencies {
  public readonly memberRepository: MemberRepository;
  constructor(
    apiProviders: HttpProviderDependencies,
    storageProviders: StorageProviderDependencies
  ) {
    this.memberRepository = new MemberRepository(apiProviders.memberApi);
  }
}
