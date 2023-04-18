import { FunctionComponent } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getMembers } from "@/client/query-fns";
import { Spinner, Table } from "@/components";

const COLUMNS = ["First Name", "Last Name", "Address", "SSN"];

export const MembersTable: FunctionComponent = () => {
  const getMembersQuery = useQuery(["members"], getMembers, {
    refetchInterval: 2 * 60 * 1000, // two minutes
  });

  const rows = getMembersQuery.data?.map((member) => Object.values(member)) || [];

  const renderUsers = (): JSX.Element => {
    if (getMembersQuery.isLoading) {
      return <Spinner />;
    }

    if (getMembersQuery.isError) {
      return <span>Fetch error: {JSON.stringify(getMembersQuery.error)}</span>;
    }

    return <Table columns={COLUMNS} data={rows} />;
  };

  return <Container>{renderUsers()}</Container>;
};

const Container = styled.div`
  width: 70%;
  ${({ theme }) => theme.breakpoint("sm")} {
    width: 100%;
  }
`;
