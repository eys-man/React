import React from 'react';
import Search from '../components/search/search';

// eslint-disable-next-line react/prefer-stateless-function
class HomePage extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <Search />
        <p>Card List will be soon</p>
      </div>
    );
  }
}

export default HomePage;
