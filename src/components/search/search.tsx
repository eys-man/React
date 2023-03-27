import React from 'react';
import './search.css';

type SearchState = {
  search: string;
};

class Search extends React.Component {
  public state: SearchState = { search: localStorage.getItem('search') || '' };

  public componentWillUnmount(value?: string): void {
    localStorage.setItem('search', value || this.state.search);
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.componentWillUnmount(event.target.value);
    this.setState({ search: event.target.value });
  };

  public render(): JSX.Element {
    const { search } = this.state;
    return (
      <div>
        <div className="search-wrapper">
          <input
            className="search"
            type="text"
            value={search}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default Search;
