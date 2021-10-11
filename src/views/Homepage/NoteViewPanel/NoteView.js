import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import sanitizeHtml from 'sanitize-html';

class NoteView extends React.Component {
  render() {
    const { note } = this.props;

    return (
      <div
        id="note-view"
        dangerouslySetInnerHTML={{ __html: note.content !== '' ? marked(sanitizeHtml(note.content)) : '' }}
      />
    );
  }
}

NoteView.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NoteView;
