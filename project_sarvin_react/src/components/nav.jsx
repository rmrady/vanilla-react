import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Shopcontext } from '../context/shopcont';

function Nav() {
  const {cartitem} = useContext(Shopcontext);
  const itemCount =cartitem.reduce((prev, current)=>{
    return prev + current.count
  },0)
  return (
   
    <div>
      <nav className='w-full h-[70px] bg-black flex justify-between px-32 pt-3  '>
        <a className='text-[30px] font-bold text-gray-400'>RaziehStyle codding</a>
        <ul className='flex text-[20px] font-bold text-white'>
            <li className='mx-3'>
                <Link to="/" className=''>Shop</Link>
            </li>
            <li className='mx-3'>
                <Link to="/Cart" className=''>
                    <FontAwesomeIcon icon={faShoppingCart}/>
                    <span className='bg-red-600 rounded-full px-2 text-[15px] text-white '>{itemCount}</span>
                </Link>
            </li>
        </ul>

      </nav>
    </div>
  )
}

export default Nav