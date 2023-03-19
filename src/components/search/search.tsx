import React from 'react';

type SearchState = {
  search: string;
};

class Search extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  public state: SearchState = { search: localStorage.getItem('search') || '' };

  public componentWillUnmount(value?: string): void {
    // eslint-disable-next-line react/destructuring-assignment
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
        <div>
          <input type="text" value={search} onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default Search;
