import React from 'react';
import Styles from  './Footer.module.css';

// Function comp with Anonymous Fn
const Footer = function(){
  let year = 2020;

  return (
    <div className='text-center'>
      <hr />
      <p className={Styles.copyright}>Copyright {year}  - Servion</p>
    </div>
  );
}

export default Footer;