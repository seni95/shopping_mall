import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {FiLogOut, FiShoppingBag} from 'react-icons/fi';
import {BsFillPencilFill} from 'react-icons/bs';
import { login, logout, onUserStateChange } from '../api/firebase';
import User from './User';

export default function Navbar() {
    const [user,setUser] = useState();
    const handleLogin=()=>{
        login().then(setUser);
    }
    const handleLogout=()=>{
        logout().then(setUser);
    }

    useEffect((user)=>{
        onUserStateChange((user)=>{
            console.log(user);
            setUser(user)
        })
    },[])
  return (
    <header className='flex flex-col items-center justify-between py-10 px-2 '>
        <Link to="/" className='flex items-center text-4xl
        '>
            <h1>MALL</h1>
        </Link>
        <nav className='flex items-center gap-4 font-semibold'>
            <Link to="/products">products</Link>
            <Link to="/carts">carts</Link>
            {user && user.isAdmin &&
            <Link to="/products/new" className='text-2xl'>
            <BsFillPencilFill></BsFillPencilFill>
            </Link>}
            {user && <User user={user}></User>}
            {!user && <button onClick={handleLogin}>Login</button>} 
            {user && <button onClick={handleLogout}>Logout</button>} 
        </nav>
    </header>
  )
}
