export default class RepoResponseType<DTO> {
  constructor(
    public readonly ok: boolean,
    public readonly message: string,
    private data?: DTO
  ) {}

  getData(): DTO | undefined {
    return this.data;
  }
}
