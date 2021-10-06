import React from 'react';

import Menu from './Menu';

import './Homepage.scss';

class Homepage extends React.Component {
  render() {
    return (
      <div id="homepage">
        <Menu />
      </div>
    );
  }
}

export default Homepage;
