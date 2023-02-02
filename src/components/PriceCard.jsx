import React from 'react'

export default function PriceCard({text,price}) {
  return (
    <div className='p-8 mx-2 rounded-2xl text-center text-lg md:text-xl'>
        <p className='text-black'>{text}</p>
        <p
        className='font-bold text-black text-xl md:text-2xl'
        >{price}</p>
    </div>
  )
}
