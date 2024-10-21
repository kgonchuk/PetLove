import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./Layout.styled";
import { Header } from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Container>
        <Header />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
