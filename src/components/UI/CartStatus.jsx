import { useQuery } from '@tanstack/react-query';
import React from 'react';
import {FaShoppingCart} from 'react-icons/fa'
import { getCart } from '../../api/firebase';
import { useAuthContext } from '../../pages/context/AuthContext';


export default function CartStatus() {
    const {user:{uid}} = useAuthContext();
    const {data:products} = useQuery(['carts'],()=>getCart(uid),{keepPreviousData:false});
  return (
    <div className='relative'>
<FaShoppingCart className='text-4xl'></FaShoppingCart>
{products && <p className='w-6 h-6 text-center bg-brand
text-white font-bold rounded-full absolute -top-1 -right-2'>{products.length}</p>}
    </div>
  )
}
