import React, { useState } from 'react';
import './Search.css';
import { AppDispatch, RootState } from '../../Redux/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../../Redux/Reducers/searchSlice';

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const Search = () => {
  const search = useAppSelector((state) => state.searchReducer.search);

  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState(search);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter') {
      dispatch(setQuery(searchValue));
    }
  };

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
