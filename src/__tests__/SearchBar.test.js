import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import '@testing-library/jest-dom/extend-expect';

describe('SearchBar component', () => {
  test('should render the search bar', () => {
    const { getByPlaceholderText, getByText } = render(<SearchBar />);
    const searchInput = getByPlaceholderText('Search city');
    const searchButton = getByText('Search');
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test('should call onCityChange prop when submitting form', () => {
    const onCityChangeMock = jest.fn();
    const { getByText, getByPlaceholderText } = render(<SearchBar onCityChange={onCityChangeMock} />);
    const searchInput = getByPlaceholderText('Search city');
    const searchButton = getByText('Search');
    fireEvent.change(searchInput, { target: { value: 'New York' } });
    fireEvent.click(searchButton);
    expect(onCityChangeMock).toHaveBeenCalledTimes(1);
    expect(onCityChangeMock).toHaveBeenCalledWith('New York');
  });
});
