import React, { Component } from 'react';
import {connect} from 'react-redux'; // Step 7: related
import { ADD_POST } from '../actions/types';

class PostForm extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  
  postSubmitHandler = (event) =>{
    event.preventDefault();

    const title = this.getTitle.value;
    const message =  this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message
    }

    console.log(data);

    // Step8: connect() helps props have dispatch method
    // using it we can dispatch action with type and data (payload)
    this.props.dispatch({
      type: ADD_POST,
      data
    });

    // Step 9: Resetting form fields after dispatching
    // [Refer Step 10] in postReducer.js
    this.getTitle.value = '';
    this.getMessage.value = '';
  }

  render() { 
    return ( 
      <div>
        <h1>Create Post</h1>
        <form onSubmit={this.postSubmitHandler}>
          <input type="text" 
          className='form-control' 
          placeholder="Enter Post Title" 
          ref={(input)=> this.getTitle = input} /><br /><br />
          <textarea rows="5" cols="28" className='form-control' 
          placeholder="Enter Post" 
          ref={(input)=>this.getMessage = input} /><br /><br />
          <button type="submit" 
          className='btn btn-primary'>Post</button>
        </form>
      </div>
    );
  }
}
// Step 7: This comp should work with redux's action
// by using connect() we are making this component 
// work seamlessly with redux.
export default connect()(PostForm);



