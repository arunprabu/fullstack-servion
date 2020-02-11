import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import postReducer from './reducers/postReducer';

// Step 6: we have created the store with one reducer. Let's 
// provide the store to the entire app. 
// To do this... you need to use the react-redux package. 
import { Provider } from 'react-redux';

// Step1: Setup the the Redux Store here
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Step 2: exec createStore() method and save it in a variable 
// Step 3: [Refer postReducer.js]  Setup Reducer for the store
// Step 5: pass the postReducer as param to the createStore()

import rootReducer from './reducers'; //combined reducers

import { fetchAllPosts } from './actions/posts';

const store = createStore(postReducer);

//To Setup Initial Loading
store.dispatch(fetchAllPosts());

// The Provider component takes the store as a prop.
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
