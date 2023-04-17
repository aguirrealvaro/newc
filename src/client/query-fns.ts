import { fetcher } from "./fetcher";
import { GetMembersResponseI } from "./interfaces";

export const getMembers = (): Promise<GetMembersResponseI> => {
  return fetcher("members");
};
