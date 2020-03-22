import { HttpProviderDependencies } from "@context/http-providers";
import { StorageProviderDependencies } from "@context/storage-providers";

//레포지토리 의존성을 주입하는 곳
export class RepositoriesDependencies {
  constructor(
    apiProviders: HttpProviderDependencies,
    storageProviders: StorageProviderDependencies
  ) {}
}
