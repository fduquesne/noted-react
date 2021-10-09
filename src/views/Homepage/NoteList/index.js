import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../../store/actions';

import NoteItem from './NoteItem';

import { Button, Input } from '../../../components';

class NoteList extends React.Component {
  render() {
    const { dispatch, noteList, selectedNote } = this.props;

    const addNewNote = () => {
      console.log('ADD NEW NOTE');
    };

    const selectNote = note => {
      dispatch(actions.selectNote(note));
    };

    return (
      <div id="note-list">
        <div id="note-list-header">
          <div id="note-list-title">To-do list</div>
          <div id="note-list-action">
            <Button icon="plus" color="primary" size="medium" onClick={addNewNote} rounded />
          </div>
        </div>
        <div id="note-list-search">
          <Input icon="search" placeholder="Search notes..." />
        </div>
        <div id="notes">
          {noteList.map(note => (
            <NoteItem
              key={note.title}
              note={note}
              onClick={() => selectNote(note)}
              selected={selectedNote.id === note.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

NoteList.propTypes = {
  dispatch: PropTypes.func,
  noteList: PropTypes.array,
  selectedNote: PropTypes.object,
};

const mapStateToProps = ({ noteList, selectedNote }) => ({ noteList, selectedNote });

export default connect(mapStateToProps)(NoteList);
