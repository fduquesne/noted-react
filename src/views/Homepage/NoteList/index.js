import React from 'react';

import NoteItem from './NoteItem';

import { Button, Input } from '../../../components';

import notes from '../../../data/mocked-notes';

class NoteList extends React.Component {
  constructor() {
    super();

    this.addNewNote = this.addNewNote.bind(this);
  }

  addNewNote() {
    console.log('ADD NEW NOTE');
  }

  render() {
    return (
      <div id="note-list">
        <div id="note-list-header">
          <div id="note-list-title">To-do list</div>
          <div id="note-list-action">
            <Button icon="plus" color="primary" size="medium" onClick={this.addNewNote} rounded />
          </div>
        </div>
        <div id="note-list-search">
          <Input icon="search" placeholder="Search notes..." />
        </div>
        <div id="notes">
          {notes.map((note, index) => (
            <NoteItem key={note.id} note={note} selected={index === 0} />
          ))}
        </div>
      </div>
    );
  }
}

export default NoteList;
