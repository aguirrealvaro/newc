import { FunctionComponent } from "react";
import styled from "styled-components";
import { Button, Input } from "@/components";
import { useForm } from "@/hooks";

export const EMAIL_REG_EXP = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Fields = {
  firstName: string;
  lastName: string;
  address: string;
  ssn: string;
};

export const Form: FunctionComponent = () => {
  const { fields, errors, handleInputChange, handleSubmit } = useForm<Fields>({
    intialValues: { firstName: "", lastName: "", address: "", ssn: "" },
    validations: {
      firstName: {
        required: {
          value: true,
          message: "Required field",
        },
      },
      lastName: {
        required: {
          value: true,
          message: "Required field",
        },
      },
      address: {
        required: {
          value: true,
          message: "Required field",
        },
      },
      ssn: {
        required: {
          value: true,
          message: "Required field",
        },
        pattern: {
          value: EMAIL_REG_EXP,
          message: "Mail invalido",
        },
      },
    },
  });

  const onSubmit = () => {
    console.log(fields);
  };

  return (
    <Container>
      <form noValidate onSubmit={(e) => handleSubmit(e, onSubmit)}>
        <InputWrapper>
          <Input
            inputId="first-name"
            label="First name"
            value={fields.firstName}
            isError={Boolean(errors?.firstName)}
            errorMessage={errors?.firstName}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            inputId="last-name"
            label="Last name"
            value={fields.lastName}
            isError={Boolean(errors?.lastName)}
            errorMessage={errors?.lastName}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            inputId="address"
            label="Address"
            value={fields.address}
            isError={Boolean(errors?.address)}
            errorMessage={errors?.address}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            inputId="ssn"
            label="SSN"
            value={fields.ssn}
            isError={Boolean(errors?.ssn)}
            errorMessage={errors?.ssn}
          />
        </InputWrapper>
        <ButtonsContainer>
          <Button block kind="outlined">
            Reset
          </Button>
          <Button block type="submit">
            Save
          </Button>
        </ButtonsContainer>
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

const ButtonsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
`;
