import React, { useState } from 'react';

function SearchBar({ onCityChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCityChange(inputValue);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search city"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        aria-label="You can write the name of the city here"
      />
      <button type="submit"
      aria-label="Press this button to search">Search</button>
    </form>
  );
}

export default SearchBar;