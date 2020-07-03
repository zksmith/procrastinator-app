import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { PostInfo } from '../../components';
import { GlobalContext } from '../../context/GlobalState';

const Bookmarks = () => {
  const { bookmarks, userId } = useContext(GlobalContext);

  if (userId || window.localStorage.getItem('token')) {
    if (bookmarks?.length > 0) {
      return (
        <ul>
          {bookmarks.map((bookmark, index) => (
            <PostInfo item={bookmark} key={index} bookmarks />
          ))}
        </ul>
      );
    } else {
      return <h1>No Bookmarks</h1>;
    }
  }
  return <Redirect to='/signin' />;
};

export default Bookmarks;
