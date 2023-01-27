import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {FiLogOut, FiShoppingBag} from 'react-icons/fi';
import {BsFillPencilFill} from 'react-icons/bs';
import User from './User';
import Button from './UI/Button';
import { useAuthContext } from '../pages/context/AuthContext';

export default function Navbar() {

    const {user,login,logout} = useAuthContext();
    console.log(user);
    console.log("dnfwlK");
   
  return (
    <header className='flex flex-col items-center justify-between py-10 px-2 gap-y-5'>
        <Link to="/" className='flex items-center text-4xl
        '>
            <h1>ZARA</h1>
        </Link>
        <nav className='flex items-center gap-4 font-semibold'>
            <Link to="/products">products</Link>
            {user && <Link to="/carts">carts</Link>}
            {user && user.isAdmin &&
            <Link to="/products/new" className='text-2xl'>
            <BsFillPencilFill></BsFillPencilFill>
            </Link>}
            {user && <User user={user}></User>}
            {!user && <Button text={'LogIn'} onClick={login}>Login</Button>} 
            {user && <Button text={'LogOut'} onClick={logout}>Logout</Button>} 
        </nav>
    </header>
  )
}
