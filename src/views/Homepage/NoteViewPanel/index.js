import React from 'react';
import PropTypes from 'prop-types';

import NoteViewHeader from './NoteViewHeader';
import NoteViewMetadata from './NoteViewMetadata';
import NoteView from './NoteView';

class NoteViewPanel extends React.Component {
  render() {
    const { note } = this.props;

    return (
      <div id="note-view-panel">
        <NoteViewHeader note={note} />
        <NoteViewMetadata note={note} />
        <NoteView note={note} />
      </div>
    );
  }
}

NoteViewPanel.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NoteViewPanel;
