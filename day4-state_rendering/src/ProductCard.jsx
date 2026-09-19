import React from 'react'

const ProductCard = ({ product , del}) => {
  
  return (
    <div className='p-3 border-2 rounded-2xl flex-col gap-4'>
      <div className='w-40'>
        <img src={product.image} alt="" /></div>
    <div>
        <h2 className='font-semibold'>{product.title.substring(0,15)}</h2>
        <p className='text-xs'>{product.category}</p>
        <p className='text-green-800 font-semibold'>{product.price}</p>
        </div>
        <button onClick={() =>del(product.id)} className='bg-red-400 p-2 font-bold rounded-2xl'>Delete</button>
        </div>
  )
}

export default ProductCard
