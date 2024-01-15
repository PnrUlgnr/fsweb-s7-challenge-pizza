import React from "react";
import Header from "./layout/Header";
import { BrowserRouter } from "react-router-dom";
import PageBody from "./pages/PageBody";
import styled from "styled-components";
import myImage from "./mvp-banner.png";

const StyledApp = styled.div`
  background-image: url(${myImage});
  background-size: cover;
  margin: 0;
  height: 100vh;
  overflow: hidden;
`;

const App = () => {
  return (
    <StyledApp>
      <Header />
      <BrowserRouter>
        <PageBody />
      </BrowserRouter>
    </StyledApp>
  );
};

export default App;
