import { Member } from "entity/member";

export interface MemberRepositoryImpl {
  sendMail(member: Member): Promise<boolean>;
  signUp(member: Member): Promise<boolean>;
}
