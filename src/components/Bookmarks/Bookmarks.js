import React from 'react';
import { Redirect } from 'react-router-dom';
import Posts from '../Posts/Posts';

function Bookmarks({ user, data }) {
  if (user) {
    return (
      <div>
        <Posts selected={'Bookmarks'} data={data} />
      </div>
    );
  }
  return <Redirect to='/signin' />;
}

export default Bookmarks;
