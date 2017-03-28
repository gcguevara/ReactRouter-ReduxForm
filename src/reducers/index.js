import { combineReducers } from 'redux';
import PostReducer from './reducer_posts.js';

const rootReducer = combineReducers({
  posts: PostReducer
});

export default rootReducer;
