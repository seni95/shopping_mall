import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import {SlMinus, SlPlus} from 'react-icons/sl'
import { addOrUpdateToCart } from '../api/firebase';

export default function CartItem({product,product:{id,image,title,option,quantity}}) {
    const handleMinus=()=>{
        if(quantity<2) return;
        addOrUpdateToCart();
    };
    const handlePlus=()=>{};
    const handleDelete=()=>{};
  return (
    <li>
        <img src={image} alt={title} />
        <div>
            <p>{title}</p>
            <p>{option}</p>
            <SlPlus onClick={handleMinus}></SlPlus>
            <span>{quantity}</span>
            <SlMinus onClick={handlePlus}></SlMinus>
            <BsFillTrashFill onClick={handleDelete}></BsFillTrashFill>
        </div>
    </li>
  )
}
