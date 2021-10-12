import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { connect } from 'react-redux';

import actions from '../../store/actions';

import DefaultPopup from './Popup/DefaultPopup';

import { Icon, Input } from '../../components';

class CreateFolderPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = { folderName: '', selectedIcon: 'folder' };
  }
  render() {
    const { dispatch, show } = this.props;

    const availableIcons = [
      'folder',
      'book',
      'check',
      'code',
      'github',
      'list',
      'list-check',
      'list-numbers',
      'pencil',
      'work',
    ];

    const createNewFolder = () => {
      dispatch(actions.createFolder(this.state.folderName, this.state.selectedIcon));
      this.setState({ folderName: '', selectedIcon: 'folder' });
    };

    return (
      <DefaultPopup
        title="Create new folder"
        type="primary"
        show={show}
        submit={{
          icon: 'plus',
          name: 'Create',
          handle: createNewFolder,
        }}
      >
        <div id="label-icon-selector">Folder icon</div>
        <div id="icon-selector">
          {availableIcons.map(icon => (
            <div
              className={cx('icon-option', { selected: icon === this.state.selectedIcon })}
              key={icon}
              onClick={() => this.setState({ selectedIcon: icon })}
            >
              <Icon name={icon} />
            </div>
          ))}
        </div>
        <Input
          icon="folder"
          label="Folder name"
          size="medium"
          value={this.state.folderName}
          onChange={e => this.setState({ folderName: e.target.value })}
          onKeyDown={e => {
            if (e.key === 'Enter') createNewFolder();
          }}
        />
      </DefaultPopup>
    );
  }
}

CreateFolderPopup.propTypes = {
  dispatch: PropTypes.func,
  show: PropTypes.bool.isRequired,
};

export default connect()(CreateFolderPopup);
