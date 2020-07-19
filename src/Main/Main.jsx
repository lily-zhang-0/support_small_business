import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPosts } from '../redux/actions/actions';

import ImageDisplay from './ImageDisplay/ImageDisplay';
import LogIn from './LogIn/LogIn';
import LogOut from './LogOut/LogOut';
import PostList from './PostList/PostList';

import './Main.css';

const Main = () => {
  const dispatch = useDispatch();
  const username = useSelector(store => store.username);
  
  useEffect(() => {
    dispatch(fetchPosts());
  })

  return (
    <main>
      <div className="first-row">
        {username ? <LogOut /> : <LogIn />}
      </div>
      <div className="main-row">
        <PostList />
        <ImageDisplay />
      </div>
    </main>
  )
}

export default Main;