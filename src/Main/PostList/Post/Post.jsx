import React from 'react';
import { useDispatch } from 'react-redux';

import { changeSelectedPost } from '../../../redux/actions/actions';

import './Post.css';

const Post = (props) => {
  const dispatch = useDispatch();

  return (
    <li onClick={() => dispatch(changeSelectedPost(props.post))}> {props.post.author} </li>
  )
}

export default Post;