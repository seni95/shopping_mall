import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import { getCart } from '../api/firebase';
import CartItem from '../components/CartItem';
import PriceCard from '../components/PriceCard';
import { useAuthContext } from './context/AuthContext'
import {GoPlus} from 'react-icons/go'
import Button from '../components/UI/Button';

export default function MyCart() {

  const {user:{uid}} = useAuthContext();
  const {isLoading,data:products} = useQuery(['carts'],()=>getCart(uid));


  if(isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length>0;
  const totalPrice = products && products.reduce((prev,current)=>prev+parseInt(current.price)*current.quantity,0);
  const SHIPPING = 3000;
  return (
    <section
    className='pt-[250px] p-8 flex flex-col'>
      <p className='text-2xl text-center font-bold pb-4 border-b border-gray-300'>내 장바구니</p>
      {!hasProducts && <p>장바구니에 아직 상품이 없습니다.</p>}
      {hasProducts && 
      <ul className='border-b border-gray-300 mb-8 p-4 px-8'>
      {products && products.map((product)=><CartItem uid={uid} key={product.id} product={product}></CartItem>)}  
      </ul>}
      <div className='bg-gray-100 rounded-lg flex justify-between items-center mb-8 px-2 md:px-8 lg:px-16'>
      <PriceCard text="상품 총액" price={totalPrice}></PriceCard>
      <GoPlus className='text-black text-5xl'></GoPlus>
      <PriceCard text="배송액" price={SHIPPING}></PriceCard>
      <FaEquals className='text-black text-5xl'></FaEquals>
      <PriceCard text="총가격" price={totalPrice+SHIPPING}></PriceCard>
      </div>
      <button className=''>주문하기</button>    
    </section>
  )
}
