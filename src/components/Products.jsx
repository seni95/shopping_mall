import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getProducts } from '../api/firebase'
import ProductCard from './ProductCard'

export default function Products({count}) {
    const {isLoading,error,data:products} = useQuery(['products'],getProducts)
  return (
    <>
    <h2 className='text-2xl text-center text-mono mt-5'>Freshly Released</h2>
    {isLoading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    <ul className='grid grid-cols-1 md:grid-cols-4 gap-4 p-4'>
      {console.log(products)}
      {products && (typeof(count)=="number") && products.slice(0,count).map(product=><ProductCard key={product.id} product={product}></ProductCard>)}
      {products && (count==="full") && products.map(product=><ProductCard key={product.id} product={product}></ProductCard>)}   
    </ul>
    </>
  )
}
