import axios from 'axios';

const locationApi = axios.create({
  baseURL: 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete'
});

const accuweatherApi = axios.create({
  baseURL: 'http://dataservice.accuweather.com/forecasts/v1/daily/5day'
});

export { locationApi, accuweatherApi };
