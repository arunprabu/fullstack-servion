import React from 'react';
import Menu from './Menu/Menu';

// Funtional Component with NAmed Fn
function Header() {
  const appName = 'My Fav Program!';

  // Returing a JSX 
  const logoURL = process.env.PUBLIC_URL + '/images/app-logo.png';
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <a className="navbar-brand" href="#">
      <img src={logoURL} width='32' height='32'/> {appName}
    </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <Menu />
      </div>
    </nav>
  );
}
    
export default Header;