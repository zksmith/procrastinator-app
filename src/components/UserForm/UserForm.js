import React from 'react';

import './UserForm.css';

const UserForm = ({ type }) => {
  if (type === 'register') {
    return (
      <div className='user-form'>
        <form action=''>
          <h2>Register</h2>
          <input type='name' placeholder='Name' />
          <input type='email' placeholder='Email' />
          <input type='text' placeholder='Password' value='' />
          <input type='button' value='Register' />
          <a href='/signin' className='under-link'>
            Sign In
          </a>
        </form>
      </div>
    );
  } else {
    return (
      <div className='user-form'>
        <form action=''>
          <h2>Sign In</h2>
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <input type='button' value='Sign In' />
          <a href='/register' className='under-link'>
            Register
          </a>
        </form>
      </div>
    );
  }
};

export default UserForm;
