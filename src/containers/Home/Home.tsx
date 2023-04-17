import { FunctionComponent, useEffect } from "react";
import { useMutation } from "react-query";
import styled from "styled-components";
import { Form, MembersTable } from "./components";
import { updateToken } from "@/client/query-fns";
import { Spinner } from "@/components";
import { AUTH_TOKEN } from "@/constants";
import { Wrapper } from "@/css";

export const Home: FunctionComponent = () => {
  const updateTokenMutation = useMutation(updateToken, {
    onSuccess: ({ token }) => {
      localStorage.setItem(AUTH_TOKEN, token);
    },
  });

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

const Container = styled.div``;

const InnerContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[8]};
  margin: ${({ theme }) => theme.spacing[12]} 0;
  ${({ theme }) => theme.breakpoint("sm")} {
    flex-direction: column;
  }
`;
