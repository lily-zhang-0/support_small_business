import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import { logOut } from '../../redux/actions/actions';

import './LogOut.css';

const LogOut = () => {
  const dispatch = useDispatch();
  const username = useSelector(store => store.username);

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logOut());
  }

  return (
    <form className="logout-form" onSubmit={handleLogOut}>
      <span>Hi, {username}</span>
      <Link to="/createPage">
        <button className="user-create">Create New Post</button>
      </Link>
      <button className="user-logout" type="submit">Log Out</button>
    </form>
  )
}

export default LogOut;