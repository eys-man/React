import React, { useEffect, useState } from 'react';
import './search.css';

const Search = () => {
  const [search, setSearch] = useState(localStorage.getItem('search') || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  useEffect((): void => {
    localStorage.setItem('search', search);
  }, [search]);

  return (
    <div>
      <div className="search-wrapper">
        <input
          className="search"
          type="text"
          value={search}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Search;
