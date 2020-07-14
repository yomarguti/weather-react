import React from 'react';

const ErrorAlert = ({ type = 'danger', message }) => {
  return (
    <div className="container">
      <div className={`alert alert-${type}`}>{message}</div>
    </div>
  );
};

export default ErrorAlert;
