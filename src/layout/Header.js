import React from "react";
import styled from "styled-components";
import Londrina from "../fonts/Londrina/LondrinaSolid-Regular.ttf";
const FontFace = styled.div`
  @font-face {
    font-family: "Londrina Solid", sans-serif;
    src: url(${Londrina}) format("woff2");
  }
`;

const HeaderTitle = styled.h1`
  display: flex;
  justify-content: center;
  color: white;
`;

function Header() {
  return (
    <FontFace>
      <HeaderTitle>Teknolojik Yemekler</HeaderTitle>
    </FontFace>
  );
}

export default Header;
