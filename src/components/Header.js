import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="/">Weather App</a>
        </div>
      </nav>
      );
  }
}

export default Header;