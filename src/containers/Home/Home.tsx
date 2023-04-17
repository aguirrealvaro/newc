import { FunctionComponent } from "react";
import styled from "styled-components";
import { Form, MembersTable } from "./components";
import { Wrapper } from "@/css";

export const Home: FunctionComponent = () => {
  return (
    <Container>
      <Wrapper>
        <InnerContainer>
          <Form />
          <MembersTable />
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
