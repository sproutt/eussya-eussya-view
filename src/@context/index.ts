import { HttpProviderDependencies } from "./http-providers/index";
import { StorageProviderDependencies } from "./storage-providers";
import { RepositoryContainer } from "./repositories";
import { ServiceDependencies } from "./services";

export class Context {
  private apiProviders: HttpProviderDependencies;
  private storageProviders: StorageProviderDependencies;
  private repositories: RepositoryContainer;
  services: ServiceDependencies;

  constructor() {
    this.apiProviders = new HttpProviderDependencies();
    this.storageProviders = new StorageProviderDependencies();
    this.repositories = new RepositoryContainer(
      this.apiProviders,
      this.storageProviders
    );
    this.services = new ServiceDependencies(this.repositories);
  }
}
