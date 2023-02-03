import React from 'react';
import {FaShoppingCart} from 'react-icons/fa'
import useCarts from '../hooks/useCarts';


export default function CartStatus() {
    const {cartQuery:{data:products}} = useCarts();
  return (
    <div className='relative'>
<FaShoppingCart className='text-4xl'></FaShoppingCart>
{products && <p className='w-6 h-6 text-center bg-brand
text-white font-bold rounded-full absolute -top-1 -right-2'>{products.length}</p>}
    </div>
  )
}
