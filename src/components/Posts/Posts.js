import React from 'react';
import './Posts.css';

const Posts = ({ selected, data, bookmarks }) => {
  if (data.length) {
    return (
      <>
        <h1>{selected}</h1>
        <ul className='posts'>
          {data.map((item, index) => (
            <a href={item.url} key={index}>
              <li>
                <p className='post-title'>{item.title}</p>
                {bookmarks ? (
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
  } else {
    return <h1>Loading...</h1>;
  }
};

export default Posts;
