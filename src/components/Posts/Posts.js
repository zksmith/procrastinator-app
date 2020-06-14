import React from 'react';

import './PostInfo';
import './Posts.css';
import PostInfo from './PostInfo';

const Posts = ({ selected, data, addBookmark, removeBookmark }) => {
  return (
    <>
      <h1>{selected}</h1>
      {data.length ? (
        <ul className='posts'>
          {data.map((item, index) => (
            <PostInfo
              item={item}
              index={index}
              key={index}
              bookmarks={selected === 'Bookmarks'}
              addBookmark={addBookmark}
              removeBookmark={removeBookmark}
            />
          ))}
        </ul>
      ) : (
        <h4>Loading...</h4>
      )}
    </>
  );
};

export default Posts;
