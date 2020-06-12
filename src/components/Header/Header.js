import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-inner'>
        <span></span>
        <span className='links-right'>
          <Link to='/signin' className='btn'>
            Log In
          </Link>
          <Link to='/register' className='btn action'>
            Sign Up
          </Link>
        </span>
      </div>
    </header>
  );
};

export default Header;
