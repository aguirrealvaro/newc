export interface MemberI {
  firstName: string;
  lastName: string;
  address: string;
  ssn: string;
}

export type GetMembersResponseI = MemberI[];
