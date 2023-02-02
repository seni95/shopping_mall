import React from 'react'

export default function Button({text,onClick}) {
  return (
    <button className='bg-gray-100 py-4' onClick={onClick}>
        <p className='text-black text-2xl'>{text}</p>
    </button>
  )
}
