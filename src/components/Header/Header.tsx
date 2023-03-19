/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/prefer-stateless-function */
// import './header.css';
import React from 'react';
import Nav from '../Nav/nav';

type props = { title: string };

class Header extends React.Component<props> {
  public render(): JSX.Element {
    return (
      <header className="header">
        <div className="header-content-wrapper">
          <h2 className="header-name">{this.props.title}</h2>
          <Nav />
        </div>
      </header>
    );
  }
}

export default Header;
