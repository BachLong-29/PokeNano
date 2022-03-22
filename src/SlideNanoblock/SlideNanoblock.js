import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {useContext} from 'react'
import { PokemonContext } from "../pages/collection/pokemon/Pokemon";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function SlideNanoblock() {
  const pokemon = useContext(PokemonContext)
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
          pokemon.nanoblocks.map((nanoblock, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={nanoblock}/>
              </SwiperSlide>  
            )
          })                    
        }
      </Swiper>
    </>
  );
}
