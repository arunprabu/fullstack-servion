import { combineReducers } from 'redux'; 
import posts from './postReducer';

//param should be object for combineReducers
export default combineReducers({
    posts: posts
});