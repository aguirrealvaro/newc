import { FunctionComponent } from "react";
import styled from "styled-components";
import { Form, UsersTable } from "./components";
import { Wrapper } from "@/css";

export const Home: FunctionComponent = () => {
  return (
    <Container>
      <Wrapper>
        <InnerContainer>
          <Form />
          <UsersTable />
        </InnerContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  margin: ${({ theme }) => theme.spacing[12]} 0;
`;

const InnerContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[8]};
`;
