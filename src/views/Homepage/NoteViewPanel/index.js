import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NoteViewHeader from './NoteViewHeader';
import NoteViewMetadata from './NoteViewMetadata';
import NoteView from './NoteView';
// import NoteEditor from './NoteEditor';

class NoteViewPanel extends React.Component {
  render() {
    const { allNotes, selectedNote } = this.props;

    const note = allNotes.find(n => n.id === selectedNote);

    return (
      <div id="note-view-panel">
        {selectedNote && (
          <>
            <NoteViewHeader note={note} />
            <NoteViewMetadata note={note} />
            <NoteView note={note} />
            {/* <NoteEditor note={note} /> */}
          </>
        )}
      </div>
    );
  }
}

NoteViewPanel.propTypes = {
  allNotes: PropTypes.array,
  selectedNote: PropTypes.number,
};

const mapStateToProps = ({ notes }) => ({ allNotes: notes.all, selectedNote: notes.selected });

export default connect(mapStateToProps)(NoteViewPanel);
