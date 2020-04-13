import { Member } from "entity/member";

export interface MemberRepositoryImpl {
  authEmail(email: string, code: string): Promise<boolean>;
  signUp(member: Member): Promise<boolean>;
  login(member: Member): Promise<boolean>;
  checkDuplicateOfEmail(memberId: string): Promise<boolean>;
  checkDuplicateOfNickName(nickName: string): Promise<boolean>;
}
