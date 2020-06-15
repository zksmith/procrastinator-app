import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../logo.svg';
import './Sidebar.css';

const Sidebar = ({ selected, changeSelected, showMobile }) => {
  const linkTexts = [
    'All Posts',
    'Reddit',
    'Hacker News',
    'Github Trending',
    'New York Times',
    'Twitch Streams',
  ];

  return (
    <nav className={`sidebar ${showMobile ? 'show' : null}`}>
      <div className='fixed-container'>
        <div className='sidebar-top'>
          <a href='/'>
            <img src={logo} alt='logo' />
          </a>
        </div>
        <ul>
          {linkTexts.map((name) => {
            return (
              <Link
                to='/'
                key={name}
                onClick={() => changeSelected(name)}
                className={`link ${name === selected ? 'selected' : ''}`}
              >
                {name === 'Twitch Streams' && <li className='divider'></li>}
                <li>{name}</li>
                {name === 'All Posts' && <li className='divider'></li>}
              </Link>
            );
          })}
          <li className='divider'></li>
          <li className='settings'>Settings</li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
