import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css'
import 'swiper/css/autoplay'
export default function MainProduct() {

  return (
    <div>
      <Swiper className='swiper'
       modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
       slidesPerView={1}
       navigation
       loop={true}
       centeredSlides={true}
       centeredSlidesBounds={true}
       centerInsufficientSlides={true}
       autoplay={{delay:1000,
       pauseOnMouseEnter: true,
       disableOnInteraction: false}}
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSlideChange={() => console.log('slide change')}>
      <SwiperSlide><img src='https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'></img></SwiperSlide>
      <SwiperSlide><img src='https://images.unsplash.com/photo-1538329972958-465d6d2144ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'></img></SwiperSlide>
      </Swiper>
    </div>
  )
}