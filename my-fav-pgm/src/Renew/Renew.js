import React from 'react';

const Renew = () => {

  // event handler 
  const renewBtnHandler = (event) => {
    console.log('CLICKED');
    console.log(event);
  }

  return(
    <div className='text-center'>
      {/* Synthentic Event */}
      <button className='btn btn-primary' onClick={renewBtnHandler}>
        Renew Now
      </button>
    </div>
  )
}

export default Renew;
