import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';

import './Auth.css';

const Auth = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const ID = e.target.id.value;
    const Pass = e.target.password.value;
    if (ID === 'admin' && Pass === '123') {
      dispatch(authActions.login());
    } else {
      setError('Please Provide valid credential');
    }
    e.target.reset();
  };
  return (
    <div className="container">
      <h1>Login</h1>{' '}
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <p style={{ color: 'white' }}>{error}</p>
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
