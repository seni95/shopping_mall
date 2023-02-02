import React, { useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import {SlMinus, SlPlus} from 'react-icons/sl'
import { addOrUpdateToCart, removeFromCart } from '../api/firebase';

const ICON_CLASS = 'transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1'

export default function CartItem({product,product:{id,image,title,option,quantity,price},uid}) {
    
    const [volume, setVolume] = useState(quantity);
  
    const handleMinus=()=>{
        if(quantity<2) return;
        addOrUpdateToCart(uid,{...product,quantity:quantity-1});
        setVolume(quantity-1);
    };
    const handlePlus=()=>{
        addOrUpdateToCart(uid,{...product,quantity:quantity+1});
        setVolume(quantity+1);

    };
    const handleDelete=()=>{
        removeFromCart(uid,id);
    };
  return (
    <li className='flex justify-between my-2 items-center'>
        <img 
        className='w-24 md:w-48 rounded-lg'
        src={image} alt={title} />
        <div className='ml-4 flex-1 flex justify-between'>
          <div className='basis-3/5'>
          <p className='text-lg'>{title}</p>
            <p className='text-xl font-bold text-brand'>{option}</p>
            <p>￦{price}</p>
          </div>
          <div className='text-2xl flex items-center'>
          <SlPlus className={ICON_CLASS} onClick={handlePlus}></SlPlus>
            <span>{volume}</span>
            <SlMinus className={ICON_CLASS} onClick={handleMinus}></SlMinus>
            <BsFillTrashFill className={ICON_CLASS} onClick={handleDelete}></BsFillTrashFill>
          </div>
            
        </div>
    </li>
  )
}
