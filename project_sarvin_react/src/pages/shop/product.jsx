import React, { useContext} from "react";
import { Shopcontext } from "../../context/shopcont";

function Product(props) {
  const { id, prodectname, productimage, price } = props.data;
  const{cartitem,addtocart, removecart}= useContext(Shopcontext);

  const isincart = cartitem?.some((item)=> item.id == id)
  

  return (
    <div className="w-full   px-20">
      <div className="w-[100%] flex flex-nowrap ">
        <div className="w-[100%]">
          <img src={productimage} className="w-[100%] h-[200px]  " alt="" />
          <h1>{prodectname}</h1>
          <p>privce : {price}$</p>

          <div className="flex mt-10">
            <button onClick={()=>addtocart(id)}  className="bg-green-300 rounded-xl text-center text-[20px] font-bold px-2">
              +
            </button>

            <p className="text-[25px] font-bold mx-3"> {cartitem?.filter((row)=> row.id == id)[0]?.count} </p>
              {isincart && <button onClick={()=> removecart(id)} className="bg-red-300 rounded-xl text-center text-[20px] font-bold px-3 mx-1">
              -
            </button>}

        </div>

        </div>
      </div>
    </div>
  );
}

export default Product;
