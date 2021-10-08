import React from 'react';

import notes from '../../data/mocked-notes';

import Menu from './Menu';
import NoteList from './NoteList';
import NoteViewPanel from './NoteViewPanel';

import './Homepage.scss';

class Homepage extends React.Component {
  render() {
    return (
      <div id="homepage">
        <Menu />
        <NoteList />
        <NoteViewPanel note={notes[0]} />
      </div>
    );
  }
}

export default Homepage;
