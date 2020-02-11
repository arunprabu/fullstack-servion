import React, { Component } from 'react';

class MyProfile extends Component{
  constructor(props){
    super(props);
    this.state = {
      userName: "Arun",
      accountCreated: '4/May/2018'
    }
  }
  

  //arrow function
  changeProfileOnInput = (event) =>{
    console.log(event.target.value);
    this.setState({
      userName: event.target.value
    });
  }

  render(){
    return(
      <div>
        <h2>Update Profile</h2>
        <input type='text' 
        onChange={this.changeProfileOnInput} 
        value={this.state.userName}/>
        <p>Username: {this.state.userName} </p>
        <span>
          Account Created On: {this.state.accountCreated}
        </span>
      </div> 
    )
  }
}

export default MyProfile;