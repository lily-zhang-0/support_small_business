import { addPost, fetchLists, login, logout } from '../../services/services';

export const ADD_POST = 'ADD_POST';
export const ADD_USER = 'ADD_USER';
export const CHANGE_POST = 'CHANGE_POST';
export const FETCH_POSTS = 'FETCH_POSTS';
export const LOG_OUT = 'LOG_OUT';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const appendPost = (post) => {
  return {
    type: ADD_POST,
    post
  }
}

export const changeSelectedPost = (post) => {
  return {
    type: CHANGE_POST,
    post
  }
}

export const logInUser = (username) => {
  return {
    type: ADD_USER,
    username
  }
}

export const logOutUser = () => {
  return { type: LOG_OUT }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts
  };
}

export const addNewPost = (instruction, imagePath) => {
  const newPost = { instruction, imagePath };
  
  return (dispatch) => {
    return addPost(newPost)
      .then(post => { dispatch(appendPost(post)); })
      .catch((err) => { console.log(err.code); });
  }
}

export const addUser = (username) => {
  return (dispatch) => {
    return login(username)
      .then(() => { dispatch(logInUser(username)); })
      .catch((err) => { console.log(err.code); });
  }
}

export const logOut = () => {
  return (dispatch) => {
    return logout()
      .then(() => { dispatch(logOutUser()) })
      .catch((err) => { console.log(err.code); });
  }
}

export const fetchPosts = () => {
  let posts = [];
  
  return (dispatch) => {
    return fetchLists()
      .then(results => {
        posts = results.posts;
        dispatch(receivePosts(posts));
      })
      .catch((err) => { console.log(err.code); });
  }
}