import { FunctionComponent } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getMembers } from "@/client";
import { Table } from "@/components";

const COLUMNS = ["First Name", "Last Name", "Address", "SSN"];

export const MembersTable: FunctionComponent = () => {
  const getMembersQuery = useQuery(["members"], getMembers);

  const rows =
    getMembersQuery.data?.map((member) => [
      member.firstName,
      member.lastName,
      member.address,
      member.ssn,
    ]) || [];

  const renderUsers = (): JSX.Element => {
    if (getMembersQuery.isLoading) {
      return <div>Loading...</div>;
    }

    return <Table columns={COLUMNS} data={rows} />;
  };

  return <Container>{renderUsers()}</Container>;
};

const Container = styled.div`
  width: 70%;
`;
