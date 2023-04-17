import { FunctionComponent } from "react";
import styled from "styled-components";
import { Input } from "@/components";

export const Form: FunctionComponent = () => {
  return (
    <Container>
      <form>
        <InputWrapper>
          <Input inputId="first-name" label="First name" />
        </InputWrapper>
        <InputWrapper>
          <Input inputId="last-name" label="Last name" />
        </InputWrapper>
        <InputWrapper>
          <Input inputId="address" label="Address" />
        </InputWrapper>
        <InputWrapper>
          <Input inputId="ssn" label="SSN" />
        </InputWrapper>
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
`;

const InputWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  &:last-child {
    margin-bottom: 0;
  }
`;
