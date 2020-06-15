import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const SignIn = ({ setUser, user }) => {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  const onSubmitSignIn = (e) => {
    e.preventDefault();

    fetch('https://procrastinator-api.herokuapp.com/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then(({ user, new_token }) => {
        if (user.id) {
          setUser({
            ...user,
            bookmarks: JSON.parse(user.bookmarks),
          });
          window.localStorage.setItem('token', new_token);
        }
      })
      .catch((err) => console.log(err));
  };

  if (user.id) {
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
      </form>
    </div>
  );
};

export default SignIn;
