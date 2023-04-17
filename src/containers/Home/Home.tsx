import { FunctionComponent, useEffect } from "react";
import { useMutation } from "react-query";
import styled from "styled-components";
import { Form, MembersTable } from "./components";
import { updateToken } from "@/client/query-fns";
import { Spinner } from "@/components";
import { Wrapper } from "@/css";

export const Home: FunctionComponent = () => {
  const updateTokenMutation = useMutation(updateToken);

  const { mutate: updateTokenMutate } = updateTokenMutation;

  useEffect(() => {
    updateTokenMutate();
  }, [updateTokenMutate]);

  const renderContent = () => {
    if (updateTokenMutation.isLoading) {
      return <Spinner />;
    }

    if (updateTokenMutation.error) {
      return <span>Update token error: {JSON.stringify(updateTokenMutation.error)}</span>;
    }

    if (updateTokenMutation.data) {
      return (
        <InnerContainer>
          <Form />
          <MembersTable />
        </InnerContainer>
      );
    }
  };

  return (
    <Container>
      <Wrapper>{renderContent()}</Wrapper>
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
