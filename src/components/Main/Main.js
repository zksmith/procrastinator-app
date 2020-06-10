import React from 'react';
import './Main.css';

function Main() {
  return (
    <main className='main-section' style={{ padding: '20px' }}>
      <h1>{'All Posts'}</h1>
      {[1, 2, 3, 4, 5, 6, 7].map((item) => (
        <ul className='posts'>
          <a href='!#'>
            <li>
              <p className='post-title'>Post title would you go right here</p>
              <div className='post-info'>
                <span>Reddit</span>
                <span>100 pts</span>
                <span>by reihaz</span>
                <span>20 comments</span>
              </div>
            </li>
          </a>
        </ul>
      ))}
    </main>
  );
}

export default Main;
