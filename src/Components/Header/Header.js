import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render () {
    return (
      <header className="header">
        <nav className="nav">
          <h1 className="app-title">
            <a href="/GameOfLife">
              Game of Life
            </a>
          </h1>
        </nav>
      </header>
    );
  }
}

export default Header;
