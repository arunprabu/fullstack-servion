import React, { Component } from 'react';
import { connect } from 'react-redux';
// Step11: Use the same connect method 
// to mapStateToProps 
// by doing the above this comp will no longer have state. 
// if state is in a component -- it is updatable so, we have 
// to convert state to props as they are read-only. 
import Post from './Post';
import { deletePost } from '../actions/posts';

class AllPost extends Component {
  constructor(props, onDelete) {
    super(props);
  }

  componentDidMount() {
    console.log('Component Did Mount');
    // Ajax calls 
  }

  componentWillUnmount(){
    console.log('Unmount');
  }
  
  render() { 
    let posts = null;
    posts = this.props.posts.map( (post) =>{
      console.log(post);
      return (
        <Post key={post.id} onDelete={ onDelete } post={post}></Post>
      )
    });

    return ( 
      <div>
        <h1>All Posts</h1>
        { this.props.posts && this.props.posts.length > 0? 
          posts
          :
          <div className='alert alert-danger'>
            No Posts Found. You can add one
          </div>
        }
      </div>
    );
  }
}

// Step 11: implementing mapStateToProps function
const mapStateToProps = (state) => {
  return {
      posts: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deletePost(id));
    }
  };
};


// Step 12: use connect() to mapStateToProps 
export default connect(mapStateToProps, mapDispatchToProps)(AllPost);



