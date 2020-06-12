import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ user }) => {
  return (
    <header className='header'>
      <div className='header-inner'>
        <span></span>
        <span className='links-right'>
          {user.id ? (
            <>
              <Link to='/bookmarks' className='btn action'>
                Bookmarks ({user.bookmarks ? user.bookmarks.length : 0})
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
