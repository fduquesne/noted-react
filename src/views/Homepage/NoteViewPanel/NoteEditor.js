import React from 'react';
import PropTypes from 'prop-types';

import NoteView from './NoteView';

import { Button } from '../../../components';

class NoteEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showPreview: false, noteContent: props.note.content };

    this.handleChange = this.handleChange.bind(this);
    this.togglePreview = this.togglePreview.bind(this);
  }

  handleChange(e) {
    this.setState({ noteContent: e.target.value });
  }
  togglePreview() {
    this.setState({ showPreview: !this.state.showPreview });
  }

  render() {
    return (
      <div id="note-editor">
        <div id="note-editor-actions">
          {!this.state.showPreview && (
            <>
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
            </>
          )}

          <div className="node-editor-actions-divider" />

          <div id="note-editor-main-actions">
            {!this.state.showPreview && (
              <Button icon="eye" label="Preview" color="default" size="medium" onClick={this.togglePreview} />
            )}
            {this.state.showPreview && (
              <Button icon="pencil" label="Back to edit" color="default" size="medium" onClick={this.togglePreview} />
            )}
            <Button icon="save" label="Save" color="primary" size="medium" onClick={() => {}} />
          </div>
        </div>

        <div id="editor">
          {this.state.showPreview && <NoteView note={{ content: this.state.noteContent }} />}
          {!this.state.showPreview && (
            <textarea value={this.state.noteContent} onChange={this.handleChange} autoFocus />
          )}
        </div>
      </div>
    );
  }
}

NoteEditor.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NoteEditor;
