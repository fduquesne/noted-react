import React from 'react';
import PropTypes from 'prop-types';

import { Button, Tag } from '../../../components';

class NoteEditorMetadata extends React.Component {
  constructor() {
    super();

    this.showNoteTagsUpdatePopup = this.showNoteTagsUpdatePopup.bind(this);
  }

  showNoteTagsUpdatePopup() {
    console.log('UPDATE NOTE TAGS');
  }

  render() {
    const { note } = this.props;

    const formatDate = timestamp => {
      const date = new Date(Number(timestamp));
      return `${date.toDateString()}, ${date.getHours()}:${date.getMinutes()}`;
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
            {note.tags && note.tags.map(tag => <Tag key={tag.label} label={tag.label} />)}

            <Button
              icon="plus"
              label="Add new tag"
              color="default"
              size="small"
              onClick={this.showNoteTagsUpdatePopup}
            />
          </div>
        </div>
      </div>
    );
  }
}

NoteEditorMetadata.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NoteEditorMetadata;
