import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

const Register = ({ setUser, user }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitRegister = (event) => {
    fetch('https://procrastinator-api.herokuapp.com/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          setUser({
            ...user,
            bookmarks: JSON.parse(user.bookmarks),
          });
          NotificationManager.success(`Welcome, ${user.name}!`);
        }
      });
  };

  if (user.id) {
    return <Redirect to='/' />;
  }
  return (
    <div className='user-form'>
      <form>
        <h2>Register</h2>
        <input
          required
          type='name'
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          type='email'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type='submit'
          value='Register'
          onClick={() => onSubmitRegister()}
        />
        <a href='/signin' className='underlink'>
          Sign in instead
        </a>
      </form>
    </div>
  );
};

export default Register;
