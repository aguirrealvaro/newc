import { FunctionComponent } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getUsers } from "@/client";
import { Table } from "@/components";

const COLUMNS = ["First Name", "Last Name", "Address", "SSN"];

export const UsersTable: FunctionComponent = () => {
  const getUsersQuery = useQuery(["members"], getUsers);

  const rows =
    getUsersQuery.data?.map((user) => [
      user.firstName,
      user.lastName,
      user.address,
      user.ssn,
    ]) || [];

  const renderUsers = (): JSX.Element => {
    if (getUsersQuery.isLoading) {
      return <div>Loading...</div>;
    }

    return <Table columns={COLUMNS} data={rows} />;
  };

  return <Container>{renderUsers()}</Container>;
};

const Container = styled.div`
  width: 70%;
`;
