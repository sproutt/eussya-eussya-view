import { Member } from "core/entity/member";

export interface MemberRepository {
  authEmail(email: string, code: string): Promise<boolean>;
  signUp(member: Member): Promise<boolean>;
  login(member: Member): Promise<boolean>;
  checkDuplicateOfEmail(memberId: string): Promise<boolean>;
  checkDuplicateOfNickName(nickName: string): Promise<boolean>;
}
