import React, { createRef, useCallback, useEffect, useRef, useState } from 'react'
import Introduction from '../components/Introduction'
import MainProduct from '../components/mainProduct'
import Products from '../components/Products'
import Banner from '../components/UI/Banner'
// import {useScrollFadeIn} from '../components/hooks/useScrollFadeIn'

export default function Home() {


  return (
    <div>
    <Banner></Banner>
    {/* <MainProduct></MainProduct> */}
   <Products count={4}></Products>
 
   <Introduction></Introduction>
   <MainProduct></MainProduct>
    </div>
  )
}
