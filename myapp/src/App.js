import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    appName: 'My app'
  }

  onTxtChangeHandler = (event) => {
    console.log('typed', event.target.value);
    this.setState({
      appName: event.target.value
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Success</h1>
        <p>{this.state.appName}</p>
        <input type='text' onChange={this.onTxtChangeHandler} value={this.state.appName}/> 
        {/* try the above one without onChange and you will see an error in console.
         onChange is must for value with state  */}
      </div>
    );
  }
  
}

export default App;
