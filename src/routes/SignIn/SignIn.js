import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Redirect } from 'react-router-dom';

const SignIn = () => {
  const { signIn, userId } = useContext(GlobalContext);

  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  const onSubmitSignIn = (e) => {
    e.preventDefault();

    signIn(signInEmail, signInPassword);
  };

  if (userId) {
    return <Redirect to='/' />;
  }
  return (
    <div className='user-form' onSubmit={(e) => onSubmitSignIn(e)}>
      <form action=''>
        <h2>Sign In</h2>
        <input
          required
          type='email'
          placeholder='Email'
          autoFocus
          onChange={(e) => setSignInEmail(e.target.value)}
        />
        <input
          required
          type='password'
          placeholder='Password'
          onChange={(e) => setSignInPassword(e.target.value)}
        />
        <input type='submit' value='Sign In' />
        <a href='/register' className='underlink'>
          Create an account
        </a>
        <h2 style={{ marginBottom: 0 }}>Demo Credentials</h2>
        <ul style={{ margin: 0 }}>
          <li>Email: demo@demo.com</li>
          <li>Password: 123456</li>
        </ul>
      </form>
    </div>
  );
};

export default SignIn;
