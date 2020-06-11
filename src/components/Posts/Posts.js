import React from 'react';

import './PostInfo';
import './Posts.css';
import PostInfo from './PostInfo';

const Posts = ({ selected, data }) => {
  if (data.length) {
    return (
      <>
        <h1>{selected}</h1>
        <ul className='posts'>
          {data.map((item, index) => (
            <PostInfo
              item={item}
              index={index}
              key={index}
              bookmarks={selected === 'bookmarks'}
            />
          ))}
        </ul>
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default Posts;
