import React from 'react';
import { PRODUCTS } from '../../data/products';
import Product from './product';

function Shop() {
  return (
    <>
        <div className='flex mt-10'>
            {PRODUCTS.map((val,i)=>{
               return(
                <Product key={i} data={val}/>
               )
            })}
        </div>
    </>
  )
}

export default Shop