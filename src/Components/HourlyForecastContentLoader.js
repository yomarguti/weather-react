import React from 'react';
import ContentLoader from 'react-content-loader';

const HourlyForecastContentLoader = () => {
  return (
    <div style={{ width: '400px', height: '220px' }}>
      {' '}
      <ContentLoader
        height={400}
        width={480}
        speed={1}
        primaryColor="#f3f3f3"
        secondaryColor="#d4d4d4"
      >
        <rect x="20" y="18" rx="0" ry="0" width="190" height="24" />
        <rect x="20" y="60" rx="0" ry="0" width="130" height="15" />
        <rect x="20" y="120" rx="0" ry="0" width="220" height="20" />

        <rect x="65" y="180" rx="0" ry="0" width="400" height="13" />
        <circle cx="47" cy="188" r="8" />
        <rect x="65" y="230" rx="0" ry="0" width="400" height="13" />
        <circle cx="47" cy="238" r="8" />
        <rect x="65" y="280" rx="0" ry="0" width="400" height="13" />
        <circle cx="47" cy="288" r="8" />
        <rect x="65" y="330" rx="0" ry="0" width="400" height="13" />
        <circle cx="47" cy="338" r="8" />
        <rect x="65" y="380" rx="0" ry="0" width="400" height="13" />
        <circle cx="47" cy="388" r="8" />
      </ContentLoader>
    </div>
  );
};

export default HourlyForecastContentLoader;
