import { FunctionComponent } from "react";
import styled from "styled-components";
import { Wrapper } from "@/css";

export const Footer: FunctionComponent = () => {
  return (
    <Container>
      <Wrapper>
        <InnerContainer>
          <span>Copyright</span>
          <span>All rights reserved</span>
        </InnerContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.footer`
  height: 80px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.assets.primary};
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
