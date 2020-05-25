import SystemRepository from "core/use-case/system-repository";
class SystemService {
  private repo: SystemRepository;
  constructor(repo: SystemRepository) {
    this.repo = repo;
  }

  async getMotivatedMassage(): Promise<string> {
    try {
      let text = await this.repo.getMotivatinalPhrase();
      return text;
    } catch (error) {
      throw error;
    }
  }
}

export default SystemService;
