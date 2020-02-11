import { ADD_POST, DELETE_POST, GET_POST, EDIT_POST } from './types';
import axios from 'axios';

// AJAX Calls 
//fake rest api url
const POSTS_REST_API_URL = 'https://jsonplaceholder.typicode.com/posts';

//receiving response data as posts and 
//attaching an event type called GET_POST and all the posts
export const fetchPosts = (posts) => {
  return {
    type: GET_POST,
    posts
  }
};

//Initial Load to fetch all posts
export const fetchAllPosts = () => {
  return (dispatch) => {
    console.log(dispatch);
    return axios.get(POSTS_REST_API_URL)
      .then(response => {
        //calling the above util method to process data, 
        // that are ready to be sent
        dispatch(fetchPosts(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};


export const createPost = ({ title, body }) => {
  return (dispatch) => {
    return axios.post(`${POSTS_REST_API_URL}`, {title, body})
      .then(response => {
        dispatch(createPostSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createPostSuccess =  (data) => {
  console.log(data)
  return {
    type: ADD_POST,
    payload: {
      id: data.id,
      title: data.title,
      body: data.body
    }
  }
};

//Delete Util 
export const deletePostSuccess = id => {
  return {
    type: DELETE_POST,
    payload: {
      id
    }
  }
}

//Delete 
export const deletePost = id => {
  return (dispatch) => {
    console.log(id);
    return axios.delete(`${POSTS_REST_API_URL}/${id}`)
      .then(response => {
        if(response.status == 200){
          dispatch(deletePostSuccess(id))
        }
      })
      .catch(error => {
        throw(error);
      });
  };
};