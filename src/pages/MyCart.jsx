import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import { getCart } from '../api/firebase';
import CartItem from '../components/CartItem';
import PriceCard from '../components/PriceCard';
import { useAuthContext } from './context/AuthContext'

export default function MyCart() {

  const {user:{uid}} = useAuthContext();
  const {isLoading,data:products} = useQuery(['carts'],()=>getCart(uid));


  if(isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length>0;
  const totalPrice = products && products.reduce((prev,current)=>prev+parseInt(current.price)*current.quantity,0);
  const SHIPPING = 3000;
  return (
    <section
    className='pt-[250px]'>
      <p>내 장바구니</p>
      {!hasProducts && <p>장바구니에 아직 상품이 없습니다.</p>}
      {hasProducts && 
      <ul>
      {products && products.map((product)=><CartItem key={product.id} product={product}></CartItem>)}  
      </ul>}
      <div>
      <PriceCard text="상품 총액" price={totalPrice}></PriceCard>
      <BsFillPlusCircleFill></BsFillPlusCircleFill>
      <PriceCard text="배송액" price={SHIPPING}></PriceCard>
      <FaEquals></FaEquals>
      <PriceCard text="총가격" price={totalPrice+SHIPPING}></PriceCard>
      </div>    
    </section>
  )
}
