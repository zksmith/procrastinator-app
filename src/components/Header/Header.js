import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-inner'>
        <span></span>
        <span className='links-right'>
          <a href='/signin'>Sign In</a>
        </span>
      </div>
    </header>
  );
};

export default Header;
