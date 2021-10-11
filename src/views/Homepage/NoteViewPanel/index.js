import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NoteViewHeader from './NoteViewHeader';
import NoteViewMetadata from './NoteViewMetadata';
import NoteView from './NoteView';
import NoteEditor from './NoteEditor';

class NoteViewPanel extends React.Component {
  render() {
    const { notes, selectedNote, showNoteEditor } = this.props;

    const note = notes && notes.find(n => n.id === selectedNote);

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
  notes: PropTypes.array,
  selectedNote: PropTypes.number,
  showNoteEditor: PropTypes.bool,
};

const mapStateToProps = state => ({
  notes: state.user.notes,
  selectedNote: state.selectedNote,
  showNoteEditor: state.app.showNoteEditor,
});

export default connect(mapStateToProps)(NoteViewPanel);
