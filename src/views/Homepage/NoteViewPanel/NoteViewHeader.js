import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../../components';

class NoteEditorHeader extends React.Component {
  render() {
    const { note } = this.props;

    const showMoreActions = () => {
      console.log('SHOW MORE ACTIONS');
    };

    const showNoteEditorPopup = () => {
      console.log('SHOW NOTE EDITOR POPUP');
    };

    return (
      <div id="note-view-header">
        <div id="note-title">{note.title}</div>
        <div id="note-actions">
          <Button icon="pencil" label="Edit" color="primary" size="medium" onClick={showNoteEditorPopup} />
          <Button icon="dots" color="default" size="medium" onClick={showMoreActions} />
        </div>
      </div>
    );
  }
}

NoteEditorHeader.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NoteEditorHeader;
