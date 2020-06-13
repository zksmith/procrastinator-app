import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

const Logout = ({ setUser }) => {
  useEffect(() => {
    setUser({
      id: '',
      name: '',
      email: '',
      bookmarks: [],
      joined: '',
    });
    NotificationManager.info('Signed Out');
  }, [setUser]);
  return <Redirect to='/' />;
};

export default Logout;
