import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import './Sidebar.css';

const Sidebar = ({ selected, changeSelected }) => {
  const { mobileSidebarShown } = useContext(GlobalContext);

  const linkTexts = [
    'All Posts',
    'Reddit',
    'Hacker News',
    'Github Trending',
    'New York Times',
    'Twitch Streams',
  ];

  return (
    <nav className={`sidebar ${mobileSidebarShown ? 'show' : ''}`}>
      <div className='fixed-container'>
        <div className='sidebar-top'>
          <a href='/'>
            <Logo />
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
