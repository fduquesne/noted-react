import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../../store/actions';

import { Button, Input, Tag } from '../../../components';

class NoteEditorMetadata extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, note, tagsValue, showTagsInput } = this.props;

    const formatDate = timestamp => {
      const date = new Date(Number(timestamp));
      return `${date.toDateString()}, ${date.getHours()}:${date.getMinutes()}`;
    };

    const handleKeyDown = e => {
      if (e.key === 'Escape') dispatch(actions.hideTagsInput());
      if (e.key === 'Enter') dispatch(actions.saveTags());
    };

    return (
      <div id="note-all-metadata">
        <div className="note-metadata">
          <div className="note-metadata-label">Last updated</div>
          <div className="note-metadata-value">{formatDate(note.updatedAt)}</div>
        </div>
        <div className="note-metadata">
          <div className="note-metadata-label">Tags</div>
          <div className="note-metadata-value">
            {showTagsInput ? (
              <Input
                value={tagsValue}
                placeholder="to-do, christmas-gifts, ..."
                size="medium"
                onChange={e => dispatch(actions.setTagsValue(e.target.value))}
                onKeyDown={handleKeyDown}
                autofocus
              />
            ) : (
              <>
                {note.tags && note.tags.map(tag => <Tag key={tag} label={tag} />)}

                <Button
                  icon="plus"
                  label="Add new tag"
                  color="default"
                  size="small"
                  onClick={() => dispatch(actions.showTagsInput())}
                />
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

NoteEditorMetadata.propTypes = {
  dispatch: PropTypes.func,
  note: PropTypes.object.isRequired,
  tagsValue: PropTypes.string,
  showTagsInput: PropTypes.bool,
};

const mapStateToProps = state => ({ showTagsInput: state.app.showTagsInput, tagsValue: state.app.tagsValue });

export default connect(mapStateToProps)(NoteEditorMetadata);
