import { useState, useEffect } from 'react';

import { accuweatherApi } from '../api/axios';
import moment from 'moment';
import 'moment/locale/es-us';

const forecastData = [
  {
    dayName: 'Lunes',
    forecastType: 'cloudy',
    maxTemp: 35,
    minTemp: 25
  },
  {
    dayName: 'Martes',
    forecastType: 'snowy',
    maxTemp: 12,
    minTemp: 5
  },
  {
    dayName: 'Miércoles',
    forecastType: 'rainy',
    maxTemp: 30,
    minTemp: 26
  },
  {
    dayName: 'Jueves',
    forecastType: 'sunny',
    maxTemp: 33,
    minTemp: 28
  },
  {
    dayName: 'Viernes',
    forecastType: 'windy',
    maxTemp: 30,
    minTemp: 26
  }
];

const parseIconName = (iconNum) => {
  switch (iconNum) {
    case iconNum < 6:
      return 'sunny';
    case 6:
    case 7:
      return 'cloudy';
    case 12:
    case 13:
    case 14:
    case 18:
      return 'rainy';
    case 15:
    case 16:
    case 17:
      return 'stormy';
    case 32:
      return 'windy';
    case 22:
      return 'snowy';
    default:
      return 'sunny';
  }
};

async function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const useForecast = () => {
  const [forecast, setForecast] = useState({
    forecastData: forecastData,
    loading: true,
    error: ''
  });

  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await accuweatherApi.get('/2532644', {
          params: {
            apikey: 'AJGYhzQvdfDMCMsDL468w6rie8PrFWvs',
            metric: true,
            details: false
          }
        });

        const forecastData = result.data.DailyForecasts.map((dailyFc) => {
          const day = moment(dailyFc.Date).format('dddd');
          return {
            minTemp: Math.round(dailyFc.Temperature.Minimum.Value),
            maxTemp: Math.round(dailyFc.Temperature.Maximum.Value),
            dayName: day.charAt(0).toUpperCase() + day.slice(1),
            forecastType: parseIconName(dailyFc.Day.Icon),
            dayForecast: dailyFc.Date
          };
        });

        if (forecastData.length === 0) {
          throw new Error('No se encontraron datos del pronostico del clima');
        }
        await wait(2000);
        setSelectedCard(forecastData[0]);
        setForecast((forecast) => ({ loading: false, error: false, forecastData }));
      } catch (error) {
        setForecast((forecast) => ({ loading: true, error: error.message, forecastData: [] }));
      }
    };

    fetchData();
  }, []);

  return { forecast, selectedCard, setSelectedCard };
};

export default useForecast;
