import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import img from './image/logo.png'
import './Header.css'
import useAuth from '../../Hooks/useAuth';

const Header = () => {
  const { user, LogOut } = useAuth();
    return (
      <div className='nav-container bg-gray-900 bg-transparent'>
        <div>
          <p className='text-4xl text-pink-500 font-extrabold mt-7 ml-5'>
            <Link to='/home'>COURSE HUB</Link>
          </p>
        </div>
        <div className='navBar'>
          <NavLink to='/home' className='item'><span>Home</span></NavLink>
          <NavLink to='/course' className='item'><span>Courses</span></NavLink>
          <NavLink to='/about' className='item'><span>About Us</span></NavLink>
          <NavLink to='/contact' className='item'><span>Contact Us</span></NavLink>
         { user.email? <button className='item' onClick={LogOut}>Log Out</button> : <NavLink to='/login' className='item'><span>Login</span></NavLink>}
        </div>
      </div>
    );
};

export default Header;