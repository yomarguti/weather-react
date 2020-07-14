import React from 'react';
import { Link } from 'react-router-dom';

import AppIcon from '../Images/AppIcon.svg';
import './Styles/NavBar.css';

const NavBar = () => {
  return (
    <div className="Navbar">
      <div className="container-fluid">
        <div className="Navbar__brand">
          <Link to="/" className="Navbar__brand__Home font-weight-bold">
            <img src={AppIcon} alt="App Weather Icon" />
            <div>Clima Mundial App</div>
          </Link>
          <Link className="Navbar__brand__Help font-weight-bold" to="/help">
            <div>Ayuda</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
