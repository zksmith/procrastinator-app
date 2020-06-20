import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';

import './Header.css';
import moonicon from '../../assets/moon.svg';
import sunicon from '../../assets/sun.svg';

const Header = () => {
  const {
    toggleSidebar,
    toggleDarkmode,
    bookmarks,
    userId,
    logOut,
    darkmode,
  } = useContext(GlobalContext);

  return (
    <header className='header'>
      <div className='header-inner'>
        <button className='link' onClick={() => toggleDarkmode()}>
          <img
            src={darkmode ? sunicon : moonicon}
            alt='toggle dark mode'
            title='Toggle Dark Mode'
          />
        </button>
        <span className='links-right'>
          {userId ? (
            <>
              <Link to='/bookmarks' className='btn action'>
                Bookmarks ({bookmarks ? bookmarks.length : 0})
              </Link>
              <Link to='/' onClick={() => logOut()}>
                Log Out
              </Link>
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
          <button className='menu-btn' onClick={() => toggleSidebar()}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z' />
            </svg>
          </button>
        </span>
      </div>
    </header>
  );
};

export default Header;
