import React, { useContext, useEffect, useRef, useState } from 'react';
import CardsContext from '../../components/CardsContext/CardsContext';
import './Search.css';

const Search = () => {
  const value = useContext(CardsContext);

  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('search') || ''
  );
  const searchRef = useRef<string>();

  useEffect((): void => {
    searchRef.current = searchValue;
  }, [searchValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter') {
      value.setSearch(searchValue);
    }
  };

  useEffect(() => {
    return () => {
      localStorage.setItem('search', searchRef.current as string);
    };
  }, []);

  return (
    <div>
      <div className="search-wrapper">
        <input
          className="search"
          type="text"
          value={searchValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default Search;
