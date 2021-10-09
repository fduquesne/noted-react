import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../../store/actions';

import NoteItem from './NoteItem';

import { Button } from '../../../components';

class NoteList extends React.Component {
  render() {
    const { dispatch, noteListToShow, selectedNote, selectedFolder } = this.props;

    const addNewNote = () => {
      dispatch(actions.showCreateNewNotePopup());
    };

    const selectNote = note => {
      dispatch(actions.selectNote(note));
    };

    return (
      <div id="note-list">
        <div id="note-list-header">
          <div id="note-list-title">{selectedFolder.name}</div>
          {selectedFolder.id !== 'shared-folder' && selectedFolder.id !== 'trash' && (
            <div id="note-list-action">
              <Button icon="plus" color="primary" size="medium" onClick={addNewNote} rounded />
            </div>
          )}
        </div>
        {/* <div id="note-list-search">
          <Input icon="search" placeholder="Search notes..." value="" onChange={() => {}} />
        </div> */}
        <div id="notes">
          {noteListToShow.map(note => (
            <NoteItem
              key={note.id}
              note={note}
              onClick={() => selectNote(note)}
              selected={selectedNote && selectedNote.id === note.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

NoteList.propTypes = {
  dispatch: PropTypes.func,
  noteListToShow: PropTypes.array,
  selectedNote: PropTypes.object,
  selectedFolder: PropTypes.object,
};

const mapStateToProps = ({ noteListToShow, selectedNote, selectedFolder }) => ({
  noteListToShow,
  selectedNote,
  selectedFolder,
});

export default connect(mapStateToProps)(NoteList);
