import { FunctionComponent } from "react";
import styled from "styled-components";
import { Form, UsersTable } from "./components";
import { Wrapper } from "@/css";

export const Home: FunctionComponent = () => {
  return (
    <div>
      <Wrapper>
        <InnerContainer>
          <Form />
          <UsersTable />
        </InnerContainer>
      </Wrapper>
    </div>
  );
};

const InnerContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
`;
