import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../store/actions';

import Popup from './Popup';

import { Input } from '../../components';

import './PopupCenter.scss';

class CreateNewNotePopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = { noteTitle: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ noteTitle: e.target.value });
  }

  render() {
    const { dispatch } = this.props;

    const createNewNote = () => {
      dispatch(actions.createNewNote(this.state.noteTitle));
    };

    return (
      <Popup title="Create new note" submit={{ name: 'Create', handle: createNewNote }}>
        <Input placeholder="My new note" value={this.state.noteTitle} onChange={this.handleChange} autofocus />
      </Popup>
    );
  }
}

CreateNewNotePopup.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(CreateNewNotePopup);
