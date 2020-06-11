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
                    <span>{item.source}</span>
                    <span>{item.upvotes} pts</span>
                    <span>by {item.author}</span>
                    <span>{item.comments} comments</span>
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
