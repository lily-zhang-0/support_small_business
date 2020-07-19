import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';

import './PostList.css';

const PostList = () => {
  const posts = useSelector(store => store.posts);

  return (
    <div className="list">
      <h2>Small Businesses</h2>
      <ul>
       {Object.keys(posts).map((key) =>
        <Post
          key={key}
          id={key}
          post={posts[key]}
        />
        )}
      </ul>
    </div>
  )
}

export default PostList;