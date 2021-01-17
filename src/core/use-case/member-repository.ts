import { Member } from "core/entity/member";
import { CancelTokenSource } from "axios";
import RepoResponseType from "data/response-type/repo-response";

export interface MemberRepository {
  authEmail(email: string, code: string): Promise<boolean>;
  sendEmail(email: string): Promise<boolean>;
  signUp(member: Member): Promise<boolean>;
  login(member: Member): Promise<RepoResponseType<undefined>>;
  getMembers(
    memberId: number,
    CancelTokenSource?: CancelTokenSource
  ): Promise<any>;
  logout(): boolean;
  checkDuplicateOfEmail(memberId: string): Promise<boolean>;
  checkDuplicateOfNickName(nickName: string): Promise<boolean>;
  isLogined(): boolean;
  getTokenInfo(): any;
  getAccessToken(): string;
}
