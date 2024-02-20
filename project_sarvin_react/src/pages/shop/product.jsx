import React from "react";


function Product(props) {
    const { id, prodectname, productimage, price } = props.data;
  return (
    <div className="w-full flex justify-between px-20">
      <div>
        <img src={productimage} className="w-[100%]" alt="" />
        <h1>{prodectname}</h1>
        <p>privce : {price}$</p>
        <button className="bg-green-300 rounded-xl text-center text-[20px] font-bold px-2">+</button>
        <button className="bg-red-300 rounded-xl text-center text-[20px] font-bold px-3 mx-1">-</button>
      </div>
    </div>
  );
}

export default Product;
