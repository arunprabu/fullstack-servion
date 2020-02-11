import React, { Component } from 'react';
import {connect} from 'react-redux';
import { DELETE_POST } from '../actions/types';

class Post extends Component { 
  onDeleteHandler = () => {
    console.log(this);
    this.props.dispatch({
      type: DELETE_POST,
      id:this.props.post.id
    });
  }

  render() {
    let cardStyles = {
      card: {
        marginTop: '20px'
      }
    }
    return (
      <div className="card" style={cardStyles.card}>
        <div className="card-body">
          <h5 className="card-title">{this.props.post.title}</h5>
          <p className="card-text">
            {this.props.post.message}
          </p>
          <button className="btn btn-primary">Edit</button>
          <button className="btn btn-danger"
           onClick={this.onDeleteHandler}>Delete</button>
        </div>
      </div>
    );
 }
}
export default connect()(Post);