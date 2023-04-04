import React, { useEffect, useRef, useState } from 'react';
import './search.css';

const Search = () => {
  const [search, setSearch] = useState(localStorage.getItem('search') || '');

  const searchRef = useRef<string>();

  useEffect((): void => {
    searchRef.current = search;
  }, [search]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
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
          value={search}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Search;
