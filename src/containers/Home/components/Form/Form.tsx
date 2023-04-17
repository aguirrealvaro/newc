import { FunctionComponent } from "react";
import styled from "styled-components";
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
          value: SSN_REG_EXP,
          message: "Format required: ###-##-####",
        },
      },
    },
  });

  const onSubmit = () => {
    console.log(fields);
  };

  console.log(process.env.API_HOST);

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
            //isError={Boolean(errors?.firstName)}
            //errorMessage={errors?.firstName}
            onChange={handleInputChange}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            name="lastName"
            label="Last name"
            value={fields.lastName}
            //isError={Boolean(errors?.lastName)}
            //errorMessage={errors?.lastName}
            onChange={handleInputChange}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            name="address"
            label="Address"
            value={fields.address}
            //isError={Boolean(errors?.address)}
            //errorMessage={errors?.address}
            onChange={handleInputChange}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            name="ssn"
            label="SSN"
            value={fields.ssn}
            //isError={Boolean(errors?.ssn)}
            //errorMessage={errors?.ssn}
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
