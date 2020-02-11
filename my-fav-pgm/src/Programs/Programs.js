import React, { Component } from 'react';
import Program from './Program';

// This is an example to work with props. 
/// The data are passed to child component named Program.js 
class Programs extends Component{
  title = 'Listing All Programs | Props Example';

  render() {
    return(
      <div className='col-md-12'>
        <h1>{this.title}</h1>
        <Program name='Big Boss' category='Entertainment' time='9 PM-10 PM'>
          Big boss details ....
        </Program>
        <Program name='Movie Time' category='Movies' time='2 PM-5 PM'>
          Action thriller movie time...
        </Program>
        <Program name='Super Songs' category='Entertainment' 
          time='8 PM-9 PM'>
          Latest Songs will premiere..
        </Program>
        <Program name='Fear Factor' category='Adventure' 
        time='7 PM-8 PM'>
          Spine Chilling Adventureous Program...
        </Program>
        <Program name='Guinness Records' category='Infotainment' 
        time='6 PM-8PM'>
          2019 Guinness World Records
        </Program>
      </div>
    )
  }
}

export default Programs;