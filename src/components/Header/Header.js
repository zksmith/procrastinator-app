import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-inner'>
        <span></span>
        <span className='links-right'>
          <a href='/signin' className='btn'>
            Log In
          </a>
          <a href='/register' className='btn action'>
            Sign Up
          </a>
        </span>
      </div>
    </header>
  );
};

export default Header;
