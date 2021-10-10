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
        dangerouslySetInnerHTML={note.content && { __html: marked(sanitizeHtml(note.content).replace('\n', '<br>')) }}
      />
    );
  }
}

NoteView.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NoteView;
