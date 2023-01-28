import React from 'react'

export default function ProductCard({product:{id,image,title,category,price}}) {
  return (
    <li className='rounded-lg shadow-md overflow-hidden cursor-pointer m-2'>
        <img className='w-full' src={image} alt={title}></img>
        <div className='my-2 px-2 text-lg'>
            <h3 className='my-2 truncate'>{title}</h3>
            <p className='my-2'>{`₩ ${price}`}</p>
        </div>
        <p className='mb-2 px-2 text-gray-600'>{category}</p>
    </li>
    )
}
