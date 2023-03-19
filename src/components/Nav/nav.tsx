import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
  private home = 'Home';

  private about = 'About us';

  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">{this.home}</NavLink>
          </li>
          <li>
            <NavLink to="/about">{this.about}</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
