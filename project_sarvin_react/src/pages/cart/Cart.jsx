import React, { useContext } from 'react';
import { PRODUCTS } from '../../data/products';
import { Shopcontext } from '../../context/shopcont';
import Product from '../shop/product';


function Cart() {
  const {cartitem} = useContext(Shopcontext)
  return (
    <div className='flex w-[40%]'>
      {PRODUCTS.map((p)=>{
        if(cartitem.some((i)=> i.id == p.id && i.count > 0))
        return <Product data={p}></Product>
      })}
    </div>
  )
}

export default Cart