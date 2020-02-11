import React from "react";

// Functional Component with inline styles
const Subscribe = (props) => {
  console.log(props);

  const subscribeStyles = { 
    subscription: {
      backgroundColor: 'blue', 
      color: '#ccc',
      padding:'10px 20px'
    },
    renewal: {
      backgroundColor: 'red',
      color: 'white',
      padding: '10px 20px'
    }
  }

  return(
    <div className='col-md-12'>
      <p style={subscribeStyles.subscription}>
        Subscription Ends: { props.date }
      </p>
      <p  style={subscribeStyles.renewal}>
        Please renew at 50% discount - Coupon Code: 50PERCENT
      </p>
    </div>
  )
};

export default Subscribe;