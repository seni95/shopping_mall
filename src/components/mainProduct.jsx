import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css'
import 'swiper/css/autoplay'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../api/firebase'
export default function MainProduct() {
  const {isLoading,error,data:products} = useQuery(['products'],getProducts)

  return (
    <div>
      <Swiper
       modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
       slidesPerView={2}
       navigation
       loop={true}
       centeredSlides={true}
       centeredSlidesBounds={true}
       centerInsufficientSlides={true}
       autoplay={{delay:4000,
       disableOnInteraction: false}}
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}>
    
        {products && products.map(product=><SwiperSlide key={product.id}> <img className='brightness-50 h-96 w-full' src={product.image}></img></SwiperSlide>)}
      {/* <SwiperSlide><img src='https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'></img></SwiperSlide>
     
      <SwiperSlide><img src='https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1195&q=80'></img></SwiperSlide>
      <SwiperSlide><img src='https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80'></img></SwiperSlide> */}
      </Swiper>
    </div>
  )
}