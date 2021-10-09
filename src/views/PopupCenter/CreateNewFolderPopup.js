import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../store/actions';

import Popup from './Popup';

import { Input } from '../../components';

import './PopupCenter.scss';

class CreateNewFolderPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = { folderName: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ folderName: e.target.value });
  }

  render() {
    const { dispatch } = this.props;

    const createNewFolder = () => {
      dispatch(actions.createNewFolder(this.state.folderName));
    };

    return (
      <Popup title="Create new folder" submit={{ name: 'Create', handle: createNewFolder }}>
        <Input placeholder="My new folder" value={this.state.folderName} onChange={this.handleChange} autofocus />
      </Popup>
    );
  }
}

CreateNewFolderPopup.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(CreateNewFolderPopup);
