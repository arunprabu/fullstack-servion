import React from 'react';

const Channel = (props) => {
  console.log(props);

  let imgUrl = process.env.PUBLIC_URL+'/images/'+props.img;

  return (
    <div className='col-md-3'>
      <div className="card">
        <div className="card-body">
          <img src={imgUrl} className="card-img-top" alt="..."/>
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.desc}</p>
          <button type="button" 
            className="btn btn-primary float-right" onClick={props.action}>
              Add to Fav
          </button>
        </div>
      </div>
    </div>
  )
}

export default Channel