import React from 'react';
import {Link} from 'react-router-dom';
import {FiShoppingBag} from 'react-icons/fi';
import {BsFillPencilFill} from 'react-icons/bs';


export default function Navbar() {
  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
        <Link to="/" className='flex items-center text-4xl text-brand'>
            <FiShoppingBag></FiShoppingBag>
            <h1>MALL</h1>
        </Link>
        <nav className='flex items-center gap-4 font-semibold'>
            <Link to="/products">products</Link>
            <Link to="/carts">carts</Link>
            <Link to="/products/new" className='text-2xl'>
                <BsFillPencilFill></BsFillPencilFill>
            </Link>
            <button>Login</button>
        </nav>
    </header>
  )
}
