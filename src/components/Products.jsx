import React from 'react'
import useProducts from './hooks/useProducts'
import ProductCard from './ProductCard'

export default function Products({count,title,kind}) {
  const {getProducts : {isLoading,error,data:products}} = useProducts(kind);
  return (
    <>
    <h2 className='text-2xl text-center text-mono mt-5'>{title}</h2>
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
