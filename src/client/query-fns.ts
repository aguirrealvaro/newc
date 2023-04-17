import { fetcher } from "./fetcher";
import { GetMembersResponseI, MemberI, UpdateTokenResponse } from "./interfaces";

export const getMembers = (): Promise<GetMembersResponseI> => {
  return fetcher("api/members");
};

export const postMember = (body: MemberI): Promise<MemberI> => {
  return fetcher("api/members", {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const updateToken = (): Promise<UpdateTokenResponse> => {
  return fetcher("auth", {
    method: "POST",
    body: JSON.stringify({
      username: "sarah",
      password: "connor",
    }),
  });
};
