import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

import './PostInfo';
import './Posts.css';
import PostInfo from './PostInfo';

const Posts = ({ selected }) => {
  const { bookmarks, displayedData } = useContext(GlobalContext);
  const data = selected === 'Bookmarks' ? bookmarks : displayedData;

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
