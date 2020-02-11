import React, { Component } from 'react';

class AnnualSubscription extends Component{
  
  state = {
    btnText: 'Subscribe for 1 Year'
  }

  onAnnualSubscriptionHandler = () => {
    console.log(this); 
    console.log('Clicked');
    // changing state like the following is NOT recommended. 
    // will not result in re-rendering 
    // this.state.btnText = 'Subscribed'; 

    this.setState({
      btnText: 'Subscribed'
    });
    
  }

  render() {
    console.log('inside Rendering');
    console.log(this.state);
    return(
      <div className='col-md-12'>
        <h2>Annual Subscription | Event Binding within Class Component</h2>
        <button className='btn btn-success' 
          onClick={this.onAnnualSubscriptionHandler}>
            {this.state.btnText}
        </button>
      </div>
    )
  }
}

export default AnnualSubscription;


