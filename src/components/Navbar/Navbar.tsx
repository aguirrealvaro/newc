import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Wrapper } from "@/css";

export const Navbar: FunctionComponent = () => {
  return (
    <Container>
      <Wrapper>
        <ListContainer>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/other">Other page</Link>
          </ListItem>
        </ListContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
`;

const ListContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

const ListItem = styled.li`
  a {
    color: ${({ theme }) => theme.assets.primary};
  }
`;
