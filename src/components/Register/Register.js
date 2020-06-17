import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Redirect } from 'react-router-dom';

const Register = () => {
  const { register, userId } = useContext(GlobalContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitRegister = (e) => {
    e.preventDefault();

    register(email, password, name);
  };

  if (userId) {
    return <Redirect to='/' />;
  }
  return (
    <div className='user-form'>
      <form onSubmit={(e) => onSubmitRegister(e)}>
        <h2>Register</h2>
        <input
          required
          type='name'
          placeholder='Name'
          autoFocus
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
        <input type='submit' value='Register' />
        <a href='/signin' className='underlink'>
          Sign in instead
        </a>
      </form>
    </div>
  );
};

export default Register;
