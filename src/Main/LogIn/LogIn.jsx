import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { verfiyUsername } from '../../services/lib';
import { addUser } from '../../redux/actions/actions';

import './LogIn.css';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [err, setErr] = useState('');

  const dispatch = useDispatch();
  
  const myChangeHandler = (event) => {
    setErr('');
    setUsername(event.target.value);
  }
  
  const handleLogIn = (e) => {
    e.preventDefault();
    verfiyUsername(username) ? setErr('Please input valid username') : setErr('');
    dispatch(addUser(username));
  }
  
  return (
    <form className="login-form" onSubmit={handleLogIn}>
      <input type="text" className="user-name" placeholder="Your business name e.g. In-N-Out Burger" onChange={myChangeHandler} />
      <button className="user-login" type="submit">Business Login</button>
      {err && <p>{err}</p>}
    </form>
  )
}

export default LogIn;