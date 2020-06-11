import React from 'react';
import './Posts.css';

const Posts = ({ selected }) => {
  return (
    <>
      <h1>{selected}</h1>
      <ul className='posts'>
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <a href='!#'>
            <li>
              <p className='post-title'>Post title would you go right here</p>
              {selected === 'Bookmarks' ? (
                <div className='post-info'>
                  <span>Bookmarked Jan 1</span>
                </div>
              ) : (
                <div className='post-info'>
                  <span>Reddit</span>
                  <span>100 pts</span>
                  <span>by reihaz</span>
                  <span>20 comments</span>
                </div>
              )}
            </li>
          </a>
        ))}
      </ul>
    </>
  );
};

export default Posts;
