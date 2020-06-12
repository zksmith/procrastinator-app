import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

function Logout({ setUser }) {
  useEffect(() => {
    setUser({
      id: '',
      name: '',
      email: '',
      bookmarks: [],
      joined: '',
    });
  }, [setUser]);
  return <Redirect to='/' />;
}

export default Logout;
