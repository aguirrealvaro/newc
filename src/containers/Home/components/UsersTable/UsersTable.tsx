import { FunctionComponent } from "react";
import styled from "styled-components";
import { Table } from "@/components";

export const UsersTable: FunctionComponent = () => {
  return (
    <Container>
      <Table columns={[]} data={[]} />
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
`;
