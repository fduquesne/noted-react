import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NoteViewHeader from './NoteViewHeader';
import NoteViewMetadata from './NoteViewMetadata';
import NoteView from './NoteView';
import NoteEditor from './NoteEditor';

class NoteViewPanel extends React.Component {
  render() {
    const { allNotes, selectedNote, showNoteEditor } = this.props;

    const note = allNotes.find(n => n.id === selectedNote);

    return (
      <div id="note-view-panel">
        {selectedNote && (
          <>
            <NoteViewHeader note={note} />
            <NoteViewMetadata note={note} />
            {showNoteEditor ? <NoteEditor note={note} /> : <NoteView note={note} />}
          </>
        )}
      </div>
    );
  }
}

NoteViewPanel.propTypes = {
  allNotes: PropTypes.array,
  selectedNote: PropTypes.number,
  showNoteEditor: PropTypes.bool,
};

const mapStateToProps = state => ({
  allNotes: state.notes.all,
  selectedNote: state.notes.selected,
  showNoteEditor: state.app.showNoteEditor,
});

export default connect(mapStateToProps)(NoteViewPanel);
