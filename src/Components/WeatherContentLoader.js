import React from 'react';
import ContentLoader from 'react-content-loader';

import './Styles/WeatherContentLoader.css';

const WeatherContentLoader = () => {
  return (
    <div className="WeatherContentLoader">
      <ContentLoader
        height={170}
        width={124}
        speed={1}
        primaryColor="#f3f3f3"
        secondaryColor="#d4d4d4"
      >
        <rect x="12" y="138" rx="0" ry="0" width="48" height="22" />
        <rect x="26" y="13" rx="0" ry="0" width="68" height="20" />
        <rect x="65" y="138" rx="0" ry="0" width="48" height="22" />
        <rect x="33" y="89" rx="0" ry="0" width="56" height="22" />
        <circle cx="86" cy="93" r="18" />
        <circle cx="37" cy="93" r="18" />
        <circle cx="41" cy="73" r="14" />
        <circle cx="67" cy="78" r="22" />
      </ContentLoader>
    </div>
  );
};

export default WeatherContentLoader;
