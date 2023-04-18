import { FunctionComponent } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import styled from "styled-components";
import { MemberI } from "@/client/interfaces";
import { getMembers, postMember } from "@/client/query-fns";
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
  const getMembersQuery = useQuery(["members"], getMembers, {
    enabled: false,
  });

  const { fields, handleInputChange, handleSubmit, resetFields, errors } = useForm<Fields>({
    intialValues: { firstName: "", lastName: "", address: "", ssn: "" },
    validations: {
      ssn: {
        custom: {
          isValid: (value) => {
            const isRepeatedSSN =
              getMembersQuery.data?.some((member) => {
                return member.ssn === value;
              }) || false;

            return !isRepeatedSSN;
          },
          message: "SSN Must be unique",
        },
      },
    },
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
    resetFields();
  };

  const isValidString = (value: string) => value.length > 1;
  const isSSNValid = fields.ssn ? RegExp(SSN_REG_EXP).test(fields.ssn) : false;

  const isFormValid: boolean =
    isValidString(fields.firstName) &&
    isValidString(fields.lastName) &&
    isValidString(fields.address) &&
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
            isError={Boolean(errors?.ssn)}
            errorMessage={errors?.ssn}
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
      {Boolean(postMemberMutation.error) && (
        <div>Post error fetch: {JSON.stringify(postMemberMutation.error)}</div>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 30%;
  ${({ theme }) => theme.breakpoint("sm")} {
    width: 100%;
  }
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
