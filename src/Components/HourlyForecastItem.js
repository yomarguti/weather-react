import React from 'react';

const HourlyForecastItem = ({ hour, temp, clickCounter, incrementCounter }) => {
  return (
    <li
      className="list-group-item HourlyForecast__ListItem"
      onClick={incrementCounter}
      style={{
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none'
      }}
    >
      <span>{hour}</span>
      <span className="font-weight-bold">{temp}</span>
      <span className="font-weight-bold">{clickCounter}</span>
    </li>
  );
};

export default HourlyForecastItem;
