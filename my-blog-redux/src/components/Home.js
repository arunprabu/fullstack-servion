import React, { Component } from 'react';
import AllPost from './AllPost';
import PostForm from './PostForm';
// import CreatePost from './Posts/CreatePost';
// import PostList from './Posts/PostList';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  
  render() { 
    return ( 
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <PostForm />
          </div>
          <div className="col-md-6">
            <AllPost />
          </div>
        </div>
      </div>
    );
  }
}
 
export default Home;



