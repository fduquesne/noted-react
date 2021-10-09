import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../../store/actions';

import { Button, Dropdown, DropdownItem } from '../../../components';

class NoteEditorHeader extends React.Component {
  render() {
    const { dispatch, note } = this.props;

    const showNoteEditorPopup = () => {
      console.log('SHOW NOTE EDITOR POPUP');
    };

    const deleteNote = () => dispatch(actions.deleteNote());

    return (
      <div id="note-view-header">
        <div id="note-title">{note.title}</div>
        <div id="note-actions">
          <Button icon="pencil" label="Edit" color="primary" size="medium" onClick={showNoteEditorPopup} />
          <Dropdown icon="dots" color="default" size="medium">
            <DropdownItem icon="trash" label="Delete note" color="danger" onClick={deleteNote} />
          </Dropdown>
        </div>
      </div>
    );
  }
}

NoteEditorHeader.propTypes = {
  dispatch: PropTypes.func,
  note: PropTypes.object.isRequired,
};

export default connect()(NoteEditorHeader);
