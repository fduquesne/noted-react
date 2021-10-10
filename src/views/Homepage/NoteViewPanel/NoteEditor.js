import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../../components';

class NoteEditor extends React.Component {
  render() {
    const { note } = this.props;

    const handleChange = () => {};

    return (
      <div id="note-editor">
        <div id="note-editor-actions">
          <div className="node-editor-actions-group">
            <Button icon="header1" color="default" size="small" onClick={() => {}} />
            <Button icon="header2" color="default" size="small" onClick={() => {}} />
            <Button icon="header3" color="default" size="small" onClick={() => {}} />
          </div>
          <div className="node-editor-actions-group">
            <Button icon="bold" color="default" size="small" onClick={() => {}} />
            <Button icon="italic" color="default" size="small" onClick={() => {}} />
            <Button icon="underline" color="default" size="small" onClick={() => {}} />
            <Button icon="strikethrough" color="default" size="small" onClick={() => {}} />
          </div>
          <div className="node-editor-actions-group">
            <Button icon="list" color="default" size="small" onClick={() => {}} />
            <Button icon="list-numbers" color="default" size="small" onClick={() => {}} />
            <Button icon="list-check" color="default" size="small" onClick={() => {}} />
          </div>
          <div className="node-editor-actions-group">
            <Button icon="code" color="default" size="small" onClick={() => {}} />
          </div>

          <div className="node-editor-actions-divider" />

          <Button icon="save" label="Save" color="primary" size="medium" onClick={() => {}} />
        </div>

        <div id="editor">
          <textarea value={note.content} onChange={handleChange} autoFocus />
        </div>
      </div>
    );
  }
}

NoteEditor.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NoteEditor;
