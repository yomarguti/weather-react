import React from 'react';
import WeatherCard from './WeatherCard';

import './Styles/WeatherRow.css';
import WeatherContentLoader from './WeatherContentLoader';

const WeatherRow = ({ forecastArray, onHandleCardClick, selectedCard, loadingState }) => {
  if (loadingState) {
    return (
      <div className="container">
        <div className="WeatherRow">
          <WeatherContentLoader />
          <WeatherContentLoader />
          <WeatherContentLoader />
          <WeatherContentLoader />
          <WeatherContentLoader />
        </div>
      </div>
    );
  }

  const fiveDayForecast = forecastArray.slice(0, 5);

  const cardForecasts = fiveDayForecast.map((forecast) => {
    const selected = selectedCard ? selectedCard.dayName === forecast.dayName : false;

    return (
      <WeatherCard
        key={forecast.dayName}
        forecastData={forecast}
        onHandleCardClick={onHandleCardClick}
        selected={selected}
      />
    );
  });

  return (
    <div className="container">
      <div className="WeatherRow">{cardForecasts}</div>
    </div>
  );
};

export default WeatherRow;
