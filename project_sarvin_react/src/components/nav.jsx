import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Nav() {
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
                </Link>
            </li>
        </ul>

      </nav>
    </div>
  )
}

export default Nav