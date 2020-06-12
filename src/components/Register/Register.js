import React from 'react';

const Register = () => {
  return (
    <div className='user-form'>
      <form action=''>
        <h2>Register</h2>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <input type='button' value='Register' />
      </form>
    </div>
  );
};

export default Register;
