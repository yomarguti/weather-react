import React from 'react';
import NavBar from '../Components/NavBar';
import WeatherRow from '../Components/WeatherRow';
import HourlyForecast from '../Components/HourlyForecast';
import useForecast from '../hooks/useForecast';
import ErrorAlert from '../Components/ErrorAlert';
import { WeatherProvider } from '../context/WeatherContext';

const Home = () => {
  const { forecast, selectedCard, setSelectedCard } = useForecast();

  const handleCardClick = (dayName) => {
    const card = forecast.forecastData.find((item) => item.dayName === dayName);
    setSelectedCard(card);
  };

  const errorAlert = forecast.error ? (
    <ErrorAlert message={forecast.error} />
  ) : (
    <HourlyForecast selectedCard={selectedCard} />
  );

  return (
    <WeatherProvider>
      <NavBar />
      <WeatherRow
        forecastArray={forecast.forecastData}
        onHandleCardClick={handleCardClick}
        selectedCard={selectedCard}
        loadingState={forecast.loading}
      />
      {errorAlert}
    </WeatherProvider>
  );
};

export default Home;
