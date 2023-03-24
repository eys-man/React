import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
  private home = 'Home';
  private about = 'About us';
  private forms = 'Forms';

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
          <li>
            <NavLink to="/forms">{this.forms}</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
