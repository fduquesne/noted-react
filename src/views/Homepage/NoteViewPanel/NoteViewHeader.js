import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../../store/actions';

import { Button } from '../../../components';

class NoteEditorHeader extends React.Component {
  render() {
    const { dispatch, showNoteEditor, note } = this.props;
    return (
      <div id="note-view-header">
        <div id="note-title">{note.title}</div>

        {!showNoteEditor && (
          <Button
            icon="pencil"
            label="Edit"
            color="primary"
            size="medium"
            onClick={() => dispatch(actions.showNoteEditor())}
          />
        )}
      </div>
    );
  }
}

NoteEditorHeader.propTypes = {
  dispatch: PropTypes.func,
  showNoteEditor: PropTypes.bool,
  note: PropTypes.object.isRequired,
};

const mapStateToProps = ({ app }) => ({ showNoteEditor: app.showNoteEditor });

export default connect(mapStateToProps)(NoteEditorHeader);
