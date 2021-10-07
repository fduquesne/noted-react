import React from 'react';

import Menu from './Menu';
import NoteList from './NoteList';

import './Homepage.scss';

class Homepage extends React.Component {
  render() {
    return (
      <div id="homepage">
        <Menu />
        <NoteList />
      </div>
    );
  }
}

export default Homepage;
