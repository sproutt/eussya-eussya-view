import { Member } from "core/entity/member";
import { CancelTokenSource } from "axios";

export interface MemberRepository {
  authEmail(email: string, code: string): Promise<boolean>;
  signUp(member: Member): Promise<boolean>;
  login(member: Member): Promise<boolean>;
  getMembers(
    memberId: number,
    CancelTokenSource?: CancelTokenSource
  ): Promise<any>;
  logout(): boolean;
  checkDuplicateOfEmail(memberId: string): Promise<boolean>;
  checkDuplicateOfNickName(nickName: string): Promise<boolean>;
  isLogined(): boolean;
  getTokenInfo(): any;
  getToken(): string;
}
