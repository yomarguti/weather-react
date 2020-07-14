import React, { useReducer } from 'react';
import { produce } from 'immer';

const WeatherContext = React.createContext();

const weatherReducer = (state, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case 'count_clicks':
        const i = draft.findIndex((el) => el.hour === action.payload);
        draft[i].clickCounter = draft[i].clickCounter + 1;
        break;
      default:
    }
  });

/* const weatherReducer = (state, action) => {
  switch (action.type) {
    case 'count_clicks':
      return state.map((item) => {
        if (item.hour === action.payload) {
          return { ...item, clickCounter: item.clickCounter + 1 };
        }
        return item;
      });

    default:
      return state;
  }
}; */

const initialState = [
  { hour: '10:00', temp: '32°C', clickCounter: 0 },
  { hour: '11:00', temp: '33°C', clickCounter: 0 },
  { hour: '12:00', temp: '34°C', clickCounter: 0 },
  { hour: '13:00', temp: '32°C', clickCounter: 0 },
  { hour: '14:00', temp: '31°C', clickCounter: 0 },
  { hour: '15:00', temp: '31°C', clickCounter: 0 },
  { hour: '16:00', temp: '30°C', clickCounter: 0 }
];

export const WeatherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  const countClicks = (hour) => {
    dispatch({ type: 'count_clicks', payload: hour });
  };
  return (
    <WeatherContext.Provider value={{ state, countClicks }}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
