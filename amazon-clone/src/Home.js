import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
  <div className='home'>
   <div className='home_container'>
       <img className='home_image'
       src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW26takeover/mainpagePC/1_Amazon-Sub-banner-1500-x-400-Karigar.jpg"
       alt=""/>
       <div className='home_row'>
         <Product title="Liberosis® LCD Writing Tablet, 10” Electronic Writing Drawing Pad, Doodle Board, Erasable Handwriting Tablet, Portable Ewriter for Kids Adults at Home School Office Blue" price={699.00} 
        image="https://m.media-amazon.com/images/I/61iq6l5RrNL._AC_UY327_FMwebp_QL65_.jpg" rating={3} />
         <Product title="Himalayan Origins Hibiscus Hair Oil with Reetha, Brahmi, Neem, Amla, Bhringraj, Nettle, 100% chemical free made with fresh Hibiscus Flower, for Men and Women, Pack of 1, 100ML Bottle" 
         price={370.00} image="https://m.media-amazon.com/images/I/71kBuPXQbvL._AC_UY327_FMwebp_QL65_.jpg" rating={4}/>

       </div>
       <div className='home_row'>
        <Product title="RADANYA Nature Laptop Skin Covers Fits for All Models for Screen Size Dimensions - 15 x 10 Inches" price={299} 
        image="https://m.media-amazon.com/images/I/71wgKcTtu7L._AC_UY327_FMwebp_QL65_.jpg" rating={2} />
        <Product title="Absolute Native Electronics W1209 50~100 digital temperature controller thermostat" price={122} 
        image="https://m.media-amazon.com/images/I/41iuDF9yvBL._AC_UY327_FMwebp_QL65_.jpg" rating={4} />
        <Product title="The ABC Murders (Poirot)- BY
Agatha Christie" price={186} image="https://images-eu.ssl-images-amazon.com/images/I/816RpO5bZJL._AC_UL320_SR320,320_.jpg" rating={5} />
       </div>
       <div className='home_row'>
        <Product title="WZATCO S6 Android 9.0 Native 1080P Full HD 4K LED Home Cinema Projector, 7200 Lumens 4D Correction Electronic Focus" 
        price={24096} image="https://m.media-amazon.com/images/I/41x-1JFQobL.jpg" rating={5} />         
        </div>   

   </div>
  </div>
 );
}

export default Home;
