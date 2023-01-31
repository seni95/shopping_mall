import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductCard({product,product:{id,image,title,category,price}}) {
    const navigate = useNavigate();
  return (
    <li 
    onClick={()=>{navigate(`/products/${id}`,{state:{product}})}}
    className='shadow-md overflow-hidden cursor-pointer m-2'>
        <img className='w-full overflow-hidden cursor-pointer
        transition-all hover:scale-105' src={image} alt={title}></img>
        <div className='my-2 px-2 text-lg'>
            <h3 className='my-2 truncate'>{title}</h3>
            <p className='my-2'>{`₩ ${price}`}</p>
        </div>
        <p className='mb-2 px-2 text-gray-600'>{category}</p>
    </li>
    )
}
