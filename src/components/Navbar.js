import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='Navbar'>
      <header>
        <div className='navElements'>
          <Link to='/'>
            <span className='logo'>Mercane</span>
          </Link>

          <ul className='articleCat'>
            <li>
              <Link to='/category/3'>
                <p>Dices</p>
              </Link>
            </li>
            <li>
              <Link to='/category/2'>
                <p>Minis</p>
              </Link>
            </li>
            <li>
              <Link to='/category/1'>
                <p>Modules</p>
              </Link>
            </li>
            <li>
              <Link to='/category/4'>
                <p>Accesories</p>
              </Link>
            </li>
          </ul>
          <div>
            <ul id='registerList'>
              <Link to='/signup'>
                <li>Register</li>
              </Link>
              <Link to='/login'>
                <li>Log In</li>
              </Link>
            </ul>
          </div>
          <div id='cart'>
            <Link to='/cart'>
              <CartWidget />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
