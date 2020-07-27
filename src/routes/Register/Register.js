import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Redirect } from 'react-router-dom';

const Register = () => {
  const { register, userId } = useContext(GlobalContext);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmitRegister = (e) => {
    e.preventDefault();

    register(formData.email, formData.password, formData.name);
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
          name='name'
          autoFocus
          onChange={(e) => onChange(e)}
        />
        <input
          required
          type='email'
          placeholder='Email'
          name='email'
          onChange={(e) => onChange(e)}
        />
        <input
          required
          type='password'
          placeholder='Password'
          name='password'
          onChange={(e) => onChange(e)}
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
