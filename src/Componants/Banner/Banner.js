import React from 'react';
import slide1 from '../../Image/slide-1.jpg'
import slide2 from '../../Image/slide-2.jpg'
import slide3 from '../../Image/slide-3.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <>
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slide1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption  text-dark banner-text">
        <h1 className='banner-header'>BEST TRAVLE AGENCY</h1>
        <button className='banner-button'>Contact Us</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={slide2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption  text-dark banner-text">
       <h1>TRUSTED TRAVEL AGENCY</h1>
        <button className='banner-button'>Contact Us</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={slide3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption  text-dark banner-text">
       <h1>GET EXCLUSIVE TOUR</h1>
        <button className='banner-button'>Contact Us</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </>
    );
};

export default Banner;