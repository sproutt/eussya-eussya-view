import { HttpProviderDependencies } from "./http-providers/index";
import { StorageProviderDependencies } from "./storage-providers";
import { RepositoriesDependencies } from "./repositories";
import { ServiceDependencies } from "./services";

export class Context {
  private apiProviders: HttpProviderDependencies;
  private storageProviders: StorageProviderDependencies;
  private repositories: RepositoriesDependencies;
  services: ServiceDependencies;

  constructor() {
    this.apiProviders = new HttpProviderDependencies();
    this.storageProviders = new StorageProviderDependencies();
    this.repositories = new RepositoriesDependencies(
      this.apiProviders,
      this.storageProviders
    );
    this.services = new ServiceDependencies(this.repositories);
  }
}
