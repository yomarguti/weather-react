import React from 'react';
import NavBar from '../Components/NavBar';
import { Link } from 'react-router-dom';

import './Styles/NotFound.css';

const NotFound = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <h1>Oops!</h1>
              <h2>404 Pagina No Encontrada</h2>
              <div className="error-details">Lo siento, Un error ocurrió.</div>
              <div className="error-actions">
                <Link to="/" className="btn btn-primary btn-lg">
                  Ir a Inicio
                </Link>
                <Link to="/help" className="btn btn-light btn-lg">
                  Ir a Ayuda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
