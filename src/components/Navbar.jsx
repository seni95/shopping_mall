import React from 'react';
import {Link} from 'react-router-dom';
import {FiShoppingBag} from 'react-icons/fi';
import {BsFillPencilFill} from 'react-icons/bs';


export default function Navbar() {
  return (
    <header>
        <Link to="/">
            <FiShoppingBag></FiShoppingBag>
            <h1>MALL</h1>
        </Link>
        <nav>
            <Link to="/products">products</Link>
            <Link to="/carts">carts</Link>
            <Link to="/products/new">
                <BsFillPencilFill></BsFillPencilFill>
            </Link>
            <button>Login</button>
        </nav>
    </header>
  )
}
