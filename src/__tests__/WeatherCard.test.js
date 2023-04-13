import React from 'react';
import { render } from '@testing-library/react';
import WeatherCard from '../components/WeatherCard';
import '@testing-library/jest-dom/extend-expect';

describe('WeatherCard component', () => {
  test('should render "Loading..." if no data is passed', () => {
    const { getByText } = render(<WeatherCard />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  test('should render the weather data if it is passed', () => {
    const data = {
      name: 'Manchester',
      main: { temp: 285 },
      weather: [{ description: 'Cloudy' }]
    };
    const { getByText } = render(<WeatherCard data={data} />);
    expect(getByText('Manchester')).toBeInTheDocument();
    expect(getByText('Cloudy')).toBeInTheDocument();
    expect(getByText('11.9°C')).toBeInTheDocument();
  });
});
