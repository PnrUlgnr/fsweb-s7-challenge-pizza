import React from 'react';
import { Link } from 'react-router-dom';
import "./HomePage.css"
import banner from "./mvp-banner.png";
function HomePage() {
  return (
    <div>
      <h1>Teknolojik Yemekler</h1>
      <p>KOD ACIKTIRIR PİZZA,DOYURUR</p>
      <Link to="/pizza">
        <button id="order-pizza">ACIKTIM</button>
      </Link>
      <img src= {banner} alt="" className='banner'/>
    </div>
  );
}

export default HomePage;
