import { fetcher } from "./fetcher";
import { GetMembersResponseI, MemberI } from "./interfaces";

export const getMembers = (): Promise<GetMembersResponseI> => {
  return fetcher("members");
};

export const postMember = (body: MemberI): Promise<MemberI> => {
  return fetcher("auth/login", {
    method: "POST",
    body: JSON.stringify(body),
  });
};
