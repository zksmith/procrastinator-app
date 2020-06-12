import React from 'react';
import { Redirect } from 'react-router-dom';
import Posts from '../Posts/Posts';

function Bookmarks({ user }) {
  if (user.id) {
    return (
      <div>
        {user.bookmarks ? (
          <Posts selected={'Bookmarks'} data={user.bookmarks} />
        ) : (
          <h1>No Bookmarks</h1>
        )}
      </div>
    );
  }
  return <Redirect to='/signin' />;
}

export default Bookmarks;
