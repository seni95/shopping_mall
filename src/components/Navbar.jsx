import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {FiLogOut, FiShoppingBag} from 'react-icons/fi';
import {BsFillPencilFill} from 'react-icons/bs';
import User from './User';
import Button from './UI/Button';
import { useAuthContext } from '../pages/context/AuthContext';
import {FaShoppingCart} from 'react-icons/fa'
import CartStatus from './UI/CartStatus';

function reload() {
  (window.location || document.location).reload();
}

export default function Navbar() {
    const [isLogin, setIsLogin] = useState(false);
    const {user,login,logout} = useAuthContext();
    console.log(logout);
    console.log("dnfwlK");
   
  return (
    <header className='absolute z-[500] h-[250px] bg-black inset-x-0 px-10 flex items-center justify-between py-20 px-2 gap-y-5'>
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
            {!user && <Button text={'LogIn'} onClick={login}>Login</Button>} 
            {user && <Button text={'LogOut'} onClick={()=>{logout(); reload()}}>Logout</Button>} 
        </nav>
    </header>
  )
}
