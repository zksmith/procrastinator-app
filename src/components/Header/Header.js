import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ user }) => {
  return (
    <header className='header'>
      <div className='header-inner'>
        <span></span>
        <span className='links-right'>
          {user ? (
            <>
              <Link to='!#' className='btn action'>
                Bookmarks
              </Link>
              <Link to='/logout'>Log Out</Link>
            </>
          ) : (
            <>
              <Link to='/signin' className='btn'>
                Sign In
              </Link>
              <Link to='/register' className='btn action'>
                Register
              </Link>
            </>
          )}
        </span>
      </div>
    </header>
  );
};

export default Header;
