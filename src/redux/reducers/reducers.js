import { ADD_POST, CHANGE_POST, ADD_USER, LOG_OUT, RECEIVE_POSTS } from '../actions/actions';

const initialState = {
  posts:[],
  selectedPost: {
    id: "001",
    author: "Cafe De Casa",
    couponCode: 'FR6bwx1q',
    imagePath: "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    instruction: "Your coupon value is $5."
  },
  username: null
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
      case ADD_POST:
        return {
          posts: [
            ...state.posts,
            action.post
          ],
          selectedPost: state.selectedPost,
          username: state.username
        }
      case CHANGE_POST:
        return {
          posts: [...state.posts],
          selectedPost: action.post,
          username: state.username
        }
      case ADD_USER:
        return {
          posts: [...state.posts],
          selectedPost: state.selectedPost,
          username: action.username
        }
      case LOG_OUT:
        return {
          posts: [...state.posts],
          selectedPost: state.selectedPost,
          username: null
        }
      case RECEIVE_POSTS:
        return {
          posts: [ ...action.posts ],
          selectedPost: state.selectedPost,
          username: state.username
        }
      default:
        return state;
    }
}

export default rootReducer;