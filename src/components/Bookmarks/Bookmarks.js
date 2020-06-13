import React from 'react';
import { Redirect } from 'react-router-dom';
import Posts from '../Posts/Posts';

const Bookmarks = ({ user, removeBookmark }) => {
  if (user.id) {
    return (
      <div>
        {user.bookmarks ? (
          <Posts
            selected={'Bookmarks'}
            data={user.bookmarks}
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
