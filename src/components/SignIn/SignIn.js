import React from 'react';

const SignIn = () => {
  return (
    <div className='user-form'>
      <form action=''>
        <h2>Sign In</h2>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <input type='button' value='Sign In' />
      </form>
    </div>
  );
};

export default SignIn;
