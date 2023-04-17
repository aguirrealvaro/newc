import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Navbar, Footer } from "@/components";

export const Layout: FunctionComponent = () => {
  return (
    <Container>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Main = styled.main`
  flex: 1;
`;
