import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Posts from '../Posts/Posts';
import { GlobalContext } from '../../context/GlobalState';

const Bookmarks = () => {
  const { bookmarks, removeBookmark, userId } = useContext(GlobalContext);

  if (userId || window.localStorage.getItem('token')) {
    return (
      <div>
        {bookmarks.length > 0 ? (
          <Posts
            selected={'Bookmarks'}
            data={bookmarks}
            removeBookmark={removeBookmark}
          />
        ) : (
          <h1>No Bookmarks</h1>
        )}
      </div>
    );
  }
  return <Redirect to='/signin' />;
};

export default Bookmarks;
