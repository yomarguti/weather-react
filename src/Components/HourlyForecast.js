import React, { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';

import './Styles/HourlyForecast.css';

import moment from 'moment';
import 'moment/locale/es-us';
import HourlyForecastContentLoader from './HourlyForecastContentLoader';
import HourlyForecastItem from './HourlyForecastItem';

const HourlyForecast = ({ selectedCard }) => {
  const { state, countClicks } = useContext(WeatherContext);
  if (!selectedCard) {
    return (
      <div className="HourlyForecast">
        <div className="container">
          <HourlyForecastContentLoader />
        </div>
      </div>
    );
  }

  const dateStr = `${selectedCard.dayName}, ${moment(selectedCard.dayForecast).format(
    'D'
  )} de ${moment(selectedCard.dayForecast).format('MMMM')}`;

  const hourlyTemps = state.map((item) => (
    <HourlyForecastItem
      temp={item.temp}
      hour={item.hour}
      key={item.hour}
      clickCounter={item.clickCounter}
      incrementCounter={() => countClicks(item.hour)}
    />
  ));

  return (
    <div className="HourlyForecast">
      <div className="container">
        <h1>{selectedCard.dayName}</h1>
        <div className="font-weight-lighter">{dateStr}</div>
        <br />
        <h4>Pronóstico horario</h4>
        <div className="row">
          <div className="col-sm-5">
            <ul className="list-group list-group-flush">{hourlyTemps}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
