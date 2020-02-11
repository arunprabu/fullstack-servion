// original core react --  to build app 
import React from 'react'; 
// makes our react app render -- or run in a browser
import ReactDOM from 'react-dom'; 
import './index.css';  // css will impact index file
// a Component named App
import App from './App'; 
// needed for offline capabilities
import * as serviceWorker from './serviceWorker';

// App component is rendered in a div with id root
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
