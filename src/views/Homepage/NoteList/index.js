import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../../store/actions';

import NoteItem from './NoteItem';

import { Button, Input } from '../../../components';

class NoteList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showInputToCreateNote: false, newNoteTitle: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(e) {
    this.setState({ newNoteTitle: e.target.value });
  }
  handleKeyDown(e) {
    if (e.key === 'Escape') this.setState({ showInputToCreateNote: false, newNoteTitle: '' });
    if (e.key === 'Enter') {
      if (this.state.newNoteTitle !== '') {
        this.props.dispatch(actions.createNote(this.state.newNoteTitle));
        this.setState({ newNoteTitle: '' });
      }
      this.setState({ showInputToCreateNote: false });
    }
  }

  render() {
    const { dispatch, allNotes, currentUser, selectedFolder, selectedNote } = this.props;

    const selectNote = noteId => dispatch(actions.selectNote(noteId));

    const folder = currentUser.folders.find(f => f.id === selectedFolder) || { name: 'My notes' };
    const noteList = selectedFolder !== 'my-notes' ? allNotes.filter(n => n.folder === selectedFolder) : allNotes;

    return (
      <div id="note-list">
        <div id="note-list-header">
          <div id="note-list-title">{folder.name}</div>
        </div>

        <div id="add-new-note">
          <Button
            icon="plus"
            label="Add new note"
            color="default"
            size="big"
            onClick={() => this.setState({ showInputToCreateNote: true })}
          />

          {this.state.showInputToCreateNote && (
            <Input
              placeholder="My new note"
              size="big"
              value={this.state.newNoteTitle}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              autofocus
            />
          )}
        </div>

        <div id="notes">
          {noteList.map(note => (
            <NoteItem
              key={note.id}
              note={note}
              onClick={() => selectNote(note.id)}
              selected={note.id === selectedNote}
            />
          ))}
        </div>
      </div>
    );
  }
}

NoteList.propTypes = {
  dispatch: PropTypes.func,
  allNotes: PropTypes.array,
  currentUser: PropTypes.object,
  selectedFolder: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  selectedNote: PropTypes.number,
};

const mapStateToProps = ({ notes, currentUser, selectedFolder }) => ({
  allNotes: notes.all,
  currentUser,
  selectedFolder,
  selectedNote: notes.selected,
});

export default connect(mapStateToProps)(NoteList);
