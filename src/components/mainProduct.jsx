import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css'
import 'swiper/css/autoplay'
export default function MainProduct() {

  return (
    <div className='text-center'>
      <Swiper className='w-4/6'
       modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
       slidesPerView={1}
       navigation
       loop={true}
       centeredSlides={true}
       centeredSlidesBounds={true}
       centerInsufficientSlides={true}
       autoplay={{delay:2500,
       pauseOnMouseEnter: true,
       disableOnInteraction: false}}
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSlideChange={() => console.log('slide change')}>
    
      <SwiperSlide>
      <div className='bg-fixed bg-cover w-screen h-screen bg-[url("https://images.unsplash.com/photo-1589363460779-cd717d2ed8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80")]'></div>
      </SwiperSlide>
      <SwiperSlide><img src='https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'></img></SwiperSlide>
      <SwiperSlide><img src='https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1195&q=80'></img></SwiperSlide>
      <SwiperSlide><img src='https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80'></img></SwiperSlide>
      </Swiper>
    </div>
  )
}