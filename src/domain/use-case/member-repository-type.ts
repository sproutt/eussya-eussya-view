import { Member } from "entity/member";

export interface MemberRepositoryType {
  sendMail(member: Member): Promise<boolean>;
  signUp(member: Member): Promise<boolean>;
}
