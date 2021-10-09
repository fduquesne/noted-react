import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../../store/actions';

import MenuGroup from './MenuGroup';
import MenuItem from './MenuItem';
// import ProfilePanel from './ProfilePanel';

import { Icon } from '../../../components';

class Menu extends React.Component {
  render() {
    const { dispatch, currentUser, selectedFolder } = this.props;

    const standardFolders = [
      { id: 'all-notes', name: 'All notes', icon: 'list' },
      { id: 'shared-notes', name: 'Shared notes', icon: 'users' },
      { id: 'trash', name: 'Trash', icon: 'trash' },
    ];

    const showCreateNewFolderPopup = () => {
      dispatch(actions.showCreateNewFolderPopup());
    };

    const selectFolder = id => {
      dispatch(actions.selectFolder(id));
    };

    return (
      <div id="menu">
        <div id="logo">
          <div id="logo-icon">
            <Icon name="pencil" />
          </div>
          <div id="logo-text">Noted.</div>
        </div>

        <div id="menu-group-container">
          <MenuGroup>
            {standardFolders.map(folder => (
              <MenuItem
                key={folder.id}
                title={folder.name}
                icon={folder.icon}
                onClick={() => selectFolder(folder)}
                selected={selectedFolder.id === folder.id}
              />
            ))}
          </MenuGroup>

          <MenuGroup title="Groups" action={{ icon: 'plus', handle: showCreateNewFolderPopup }}>
            {currentUser.folders &&
              currentUser.folders.map(folder => (
                <MenuItem
                  key={folder.id}
                  title={folder.name}
                  icon="folder"
                  onClick={() => selectFolder(folder)}
                  selected={selectedFolder.id === folder.id}
                />
              ))}
          </MenuGroup>
        </div>

        {/* <ProfilePanel /> */}
      </div>
    );
  }
}

Menu.propTypes = {
  dispatch: PropTypes.func,
  currentUser: PropTypes.object,
  selectedFolder: PropTypes.object,
};

const mapStateToProps = ({ currentUser, selectedFolder }) => ({ currentUser, selectedFolder });

export default connect(mapStateToProps)(Menu);
