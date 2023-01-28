import React, { useState } from 'react';
import {BsChevronDoubleDown} from 'react-icons/bs';

export default function Banner() {
    const [desc,setDesc] = useState(true);

  return (
    <section>
    <div className='flex flex-col justify-end place-items-center brightness-50 bg-fixed bg-cover w-screen h-screen bg-banner'>
        {/* <h2 className='text-6xl'>SHOP WITH US</h2> */}
        {/* {<h2 className='text-4xl mb-10'>Best Products, High Quaility</h2>} */}
        <div className='pb-20'>
        {desc && <BsChevronDoubleDown className='text-5xl'></BsChevronDoubleDown>}
        </div>
    </div>
    </section>
  )
}
