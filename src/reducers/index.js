import { combineReducers } from 'redux';
import PostReducer from './reducer_posts.js';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  posts: PostReducer
});

export default rootReducer;
