import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../../store/actions';

import NoteView from './NoteView';

import { Button } from '../../../components';

class NoteEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showPreview: false, noteContent: props.note.content };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.togglePreview = this.togglePreview.bind(this);
    this.cancelNoteEdition = this.cancelNoteEdition.bind(this);
    this.saveNoteContent = this.saveNoteContent.bind(this);
  }

  handleChange(e) {
    this.setState({ noteContent: e.target.value });
  }
  handleKeyDown(e) {
    if (e.keyCode === 13 && e.ctrlKey) this.saveNoteContent();
  }
  togglePreview() {
    this.setState({ showPreview: !this.state.showPreview });
  }
  cancelNoteEdition() {
    this.props.dispatch(actions.hideNoteEditor());
  }
  saveNoteContent() {
    this.props.dispatch(actions.saveNoteContent(this.props.note.id, this.state.noteContent));
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

            <Button icon="x" label="Cancel" color="default" size="medium" onClick={this.cancelNoteEdition} />
            <Button icon="save" label="Save" color="primary" size="medium" onClick={this.saveNoteContent} />
          </div>
        </div>

        <div id="editor">
          {this.state.showPreview && <NoteView note={{ content: this.state.noteContent }} />}
          {!this.state.showPreview && (
            <textarea
              value={this.state.noteContent}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              autoFocus
            />
          )}
        </div>
      </div>
    );
  }
}

NoteEditor.propTypes = {
  dispatch: PropTypes.func,
  note: PropTypes.object.isRequired,
};

export default connect()(NoteEditor);
