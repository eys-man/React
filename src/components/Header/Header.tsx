import './header.css';
import React from 'react';
import Nav from '../Nav/nav';

type Props = { title: string };

class Header extends React.Component<Props> {
  public render(): JSX.Element {
    const { title } = this.props;
    return (
      <header className="header">
        <div className="header-wrapper">
          <h1>{title}</h1>
          <Nav />
        </div>
      </header>
    );
  }
}

export default Header;
