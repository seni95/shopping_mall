import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {BsFillPencilFill} from 'react-icons/bs';
import User from './User';
import { useAuthContext } from '../pages/context/AuthContext';
import CartStatus from './UI/CartStatus';

export default function Navbar() {
    const {user,login,logout} = useAuthContext();
    console.log(logout);
    console.log("dnfwlK");

   
   
  return (
    <header 
    className='max-sm:flex-col absolute z-[500] h-[250px] bg-black inset-x-0 px-10 flex 
    items-center justify-between py-20 px-2 gap-y-5'>
        <Link to="/" className='flex items-center text-4xl
        '>
            <h1>MALL</h1>
        </Link>
        <nav className='flex items-center gap-4 font-semibold'>
            <Link to="/Tops">Top</Link>
            <Link to="/Bottoms">Bottom</Link>
            <Link to="/Shoes">Shoes</Link>
            {user && <Link to="/carts">
              <CartStatus></CartStatus></Link>}
            {user && user.isAdmin &&
            <Link to="/products/new" className='text-2xl'>
            <BsFillPencilFill></BsFillPencilFill>
            </Link>}
            {user && <User user={user}></User>}
            {!user && <button text={'LogIn'} onClick={login}>Login</button>} 
            {user && <button text={'LogOut'} onClick={logout}>Logout</button>} 
        </nav>
    </header>
  )
}
