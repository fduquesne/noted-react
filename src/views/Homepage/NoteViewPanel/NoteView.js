import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

class NoteView extends React.Component {
  render() {
    const { note } = this.props;

    return <div id="note-view" dangerouslySetInnerHTML={{ __html: marked(note.content) }} />;
  }
}

NoteView.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NoteView;
