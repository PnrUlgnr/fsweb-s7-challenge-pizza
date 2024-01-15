import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Barlow from "../fonts/Barlow/Barlow-Medium.ttf";

const Container = styled.div`
  text-align: center;
  color: white;
  margin-top: 100px;
`;

const Title = styled.h1`
  font-family: "Barlow", sans-serif; /* Font yüklemesi burada yapılıyor */
  color: white;
  font-size: 40px;
  width: 25%;
  margin: 0 auto;
`;

const Button = styled.button`
  font-family: "Barlow", sans-serif; /* Font yüklemesi burada yapılıyor */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: yellow;
  border-radius: 20px;
  border: 2px solid transparent;
  color: black;
  margin: 50px auto;
  padding: 1em 2em;
  text-decoration: none;
`;

// Font yüklemesi için @font-face kullanımı
const FontFace = styled.div`
  @font-face {
    font-family: "Barlow"; /* Font ismi */
    src: url(${Barlow}) format("truetype"); /* Font dosyasının yolu ve formatı */
    font-weight: normal;
    font-style: normal;
  }
`;

function HomePage() {
  return (
    <FontFace>
      <Container>
        <Title>KOD ACIKTIRIR, PİZZA DOYURUR</Title>
        <NavLink to="/pizza" style={{ textDecoration: "none" }}>
          <Button>ACIKTIM</Button>
        </NavLink>
      </Container>
    </FontFace>
  );
}


export default HomePage;
