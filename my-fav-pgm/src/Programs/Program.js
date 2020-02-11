import React from 'react';

// props are received from parent comp Programs.js
const Program = (props) => {  

  // props are data that are passed to child comp 
  // props are read-only
  console.log(props); 

  return (
    <div className="card CardMarginTop">
      <div className="card-header">
        Featured 
        <span className="badge badge-warning float-right">
          {props.category}
        </span>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.children}</p>
        <a href="#" className="btn btn-primary">Watch it</a>
      </div>
      <div className="card-footer text-muted">
        {props.time}
      </div>
    </div>
  )
}

export default Program;