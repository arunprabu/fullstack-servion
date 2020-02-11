import { ADD_POST, GET_POST, EDIT_POST, DELETE_POST } from '../actions/types';

// Step3: Setting up postReducer so that
// we can combine this reducer with other reducers later 
// and make a big object for the store 
// reducer should mandatorily return a state. 
const postReducer = (state = [], action) => { // default param 
  console.log(state);
  console.log(action);
  // Step 4: work with actions 
  // Action will have type and an optional payload 
  switch(action.type) {
    case ADD_POST:
      // Step 10: see the state in console
      // console.log( state.concat([action.data])); 
      // [Refer Step 11] in AllPost.js
      return state.concat([action.data]); 
    case GET_POST: 
      return state; // not implemented yet
    case EDIT_POST: 
      return state;  // not implemented yet
    case DELETE_POST:
      return state.filter((post)=>post.id !== action.id);
    default:
      return state;
  }
}
export default postReducer;

// Step 5: [Refer index.js]

