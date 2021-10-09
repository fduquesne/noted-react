import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NoteViewHeader from './NoteViewHeader';
import NoteViewMetadata from './NoteViewMetadata';
import NoteView from './NoteView';

class NoteViewPanel extends React.Component {
  render() {
    const { selectedNote } = this.props;

    return (
      <div id="note-view-panel">
        {selectedNote && (
          <>
            <NoteViewHeader note={selectedNote} />
            <NoteViewMetadata note={selectedNote} />
            <NoteView note={selectedNote} />
          </>
        )}
      </div>
    );
  }
}

NoteViewPanel.propTypes = {
  selectedNote: PropTypes.object,
};

const mapStateToProps = ({ selectedNote }) => ({ selectedNote });

export default connect(mapStateToProps)(NoteViewPanel);
