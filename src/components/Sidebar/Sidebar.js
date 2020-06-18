import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';

import logo from '../../assets/logo.svg';
import whitelogo from '../../assets/whitelogo.svg';
import './Sidebar.css';

const Sidebar = ({ selected, changeSelected }) => {
  const { mobileSidebarShown, darkmode } = useContext(GlobalContext);

  const linkTexts = [
    'All Posts',
    'Reddit',
    'Hacker News',
    'Github Trending',
    'New York Times',
    'Twitch Streams',
  ];

  return (
    <nav className={`sidebar ${mobileSidebarShown ? 'show' : null}`}>
      <div className='fixed-container'>
        <div className='sidebar-top'>
          <a href='/'>
            <img src={darkmode ? whitelogo : logo} alt='logo' />
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
