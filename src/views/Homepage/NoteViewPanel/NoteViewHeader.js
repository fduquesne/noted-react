import React from 'react';
import PropTypes from 'prop-types';

class NoteEditorHeader extends React.Component {
  render() {
    const { note } = this.props;
    return (
      <div id="note-view-header">
        <div id="note-title">{note.title}</div>
      </div>
    );
  }
}

NoteEditorHeader.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NoteEditorHeader;
