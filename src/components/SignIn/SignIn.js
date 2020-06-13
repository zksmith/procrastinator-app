import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const SignIn = ({ setUser, user }) => {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  const onSubmitSignIn = () => {
    fetch('https://procrastinator-api.herokuapp.com/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          setUser({
            ...user,
            bookmarks: JSON.parse(user.bookmarks),
          });
        }
      })
      .catch((err) => console.log(err));
  };
  if (user.id) {
    return <Redirect to='/' />;
  }
  return (
    <div className='user-form'>
      <form action=''>
        <h2>Sign In</h2>
        <input
          type='email'
          placeholder='Email'
          onChange={(e) => setSignInEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => setSignInPassword(e.target.value)}
        />
        <input type='button' value='Sign In' onClick={() => onSubmitSignIn()} />
        <a href='/register' className='underlink'>
          Create an account
        </a>
      </form>
    </div>
  );
};

export default SignIn;
