import React from 'react';

import './Styles/WeatherCard.css';

export const WeatherCard = ({
  forecastData: { dayName, minTemp, maxTemp, forecastType },
  onHandleCardClick,
  selected
}) => {
  const cardClass = selected ? `WeatherCard WeatherCard__Selected` : 'WeatherCard';

  return (
    <div className={cardClass} onClick={() => onHandleCardClick(dayName)}>
      <span className="font-weight-light text-center">{dayName.substring(0, 3)}</span>
      <img src={require(`../Images/${forecastType}.svg`)} alt="Weather Type Icon" />
      <div className="WeatherCard__Temp">
        <span className="font-weight-normal">{maxTemp}°</span>
        <span className="font-weight-lighter">{minTemp}°</span>
      </div>
    </div>
  );
};

export default WeatherCard;
