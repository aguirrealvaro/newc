import { FunctionComponent } from "react";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { postMember } from "@/client";
import { MemberI } from "@/client/interfaces";
import { Button, Input } from "@/components";
import { SSN_REG_EXP } from "@/constants";
import { useForm } from "@/hooks";

type Fields = {
  firstName: string;
  lastName: string;
  address: string;
  ssn: string;
};

export const Form: FunctionComponent = () => {
  const { fields, handleInputChange, handleSubmit, resetFields } = useForm<Fields>({
    intialValues: { firstName: "", lastName: "", address: "", ssn: "" },
  });

  const postMemberMutation = useMutation(postMember, {
    onSuccess: (newMember) => {
      queryClient.setQueryData<MemberI[]>("members", (oldMembers) => {
        return oldMembers ? [...oldMembers, newMember] : [newMember];
      });
    },
  });

  const queryClient = useQueryClient();

  const onSubmit = () => {
    const trimmedFields: MemberI = {
      firstName: fields.firstName.trim(),
      lastName: fields.lastName.trim(),
      address: fields.address.trim(),
      ssn: fields.ssn,
    };

    postMemberMutation.mutate(trimmedFields);
  };

  const isSSNValid = fields.ssn ? RegExp(SSN_REG_EXP).test(fields.ssn) : false;

  const isFormValid: boolean =
    Boolean(fields.firstName) &&
    Boolean(fields.lastName) &&
    Boolean(fields.address) &&
    isSSNValid;

  return (
    <Container>
      <form noValidate onSubmit={(e) => handleSubmit(e, onSubmit)}>
        <InputWrapper>
          <Input
            name="firstName"
            label="First name"
            value={fields.firstName}
            onChange={handleInputChange}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            name="lastName"
            label="Last name"
            value={fields.lastName}
            onChange={handleInputChange}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            name="address"
            label="Address"
            value={fields.address}
            onChange={handleInputChange}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            name="ssn"
            label="SSN"
            value={fields.ssn}
            onChange={handleInputChange}
            helpText="Format required: ###-##-#### (numbers)"
          />
        </InputWrapper>
        <ButtonsContainer>
          <Button block kind="alternative" onClick={resetFields}>
            Reset
          </Button>
          <Button block type="submit" disabled={!isFormValid}>
            Save
          </Button>
        </ButtonsContainer>
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 30%;
`;

const InputWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  &:last-child {
    margin-bottom: 0;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
`;
