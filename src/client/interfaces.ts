interface UserI {
  firstName: string;
  lastName: string;
  address: string;
  ssn: string;
}

export type GetUsersResponseI = UserI[];
