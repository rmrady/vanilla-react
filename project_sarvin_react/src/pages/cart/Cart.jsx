import React, { useContext } from 'react';
import { PRODUCTS } from '../../data/products';
import { Shopcontext } from '../../context/shopcont';
import Product from '../shop/product';


function Cart() {
  const {cartitem, resetcort} = useContext(Shopcontext)
  return (
    <>
    <div className='flex w-[40%]'>
      {PRODUCTS.map((p)=>{
        if(cartitem?.some((i)=> i.id == p.id && i.count > 0))
        return <Product data={p}></Product>
      })}
    </div>
    <button onClick={resetcort} className='bg-blue-300 rounded-lg text-[20px] text-white text-center m-36 px-6 py-1'>reset</button>
    </>
  )
}

export default Cart