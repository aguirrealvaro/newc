import { fetcher } from "./fetcher";
import { GetUsersResponseI } from "./interfaces";

export const getUsers = (): Promise<GetUsersResponseI> => {
  return fetcher("members");
};
