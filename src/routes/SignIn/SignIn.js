import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Redirect } from 'react-router-dom';

const SignIn = () => {
  const { signIn, userId } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmitSignIn = (e) => {
    e.preventDefault();

    signIn(formData.email, formData.password);
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
          name='email'
          autoFocus
          onChange={(e) => onChange(e)}
        />
        <input
          required
          type='password'
          placeholder='Password'
          name='password'
          onChange={(e) => onChange(e)}
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
