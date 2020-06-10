import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <nav className='sidebar'>
      <div style={{ height: '56px', marginLeft: '48px' }}>PLACEHOLDER</div>
      <ul>
        <a href='!#' className={'selected'}>
          <li>All Posts</li>
        </a>
        <a href='!#'>
          <li className='divider'></li>
        </a>
        <a href='!#'>
          <li>Reddit</li>
        </a>
        <a href='!#'>
          <li>Hacker News</li>
        </a>
        <a href='!#'>
          <li>Slashdot</li>
        </a>
        <a href='!#'>
          <li>Github Trending</li>
        </a>
        <a href='!#'>
          <li>Medium</li>
        </a>
      </ul>
    </nav>
  );
}

export default Sidebar;
