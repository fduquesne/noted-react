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

    const addNewFolder = () => {
      console.log('ADD NEW FOLDER');
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
            <MenuItem
              title="All notes"
              icon="list"
              onClick={() => selectFolder('all-notes')}
              selected={selectedFolder === 'all-notes'}
            />
            <MenuItem
              title="Shared notes"
              icon="users"
              onClick={() => selectFolder('shared-notes')}
              selected={selectedFolder === 'shared-notes'}
            />
            <MenuItem
              title="Trash"
              icon="trash"
              onClick={() => selectFolder('trash')}
              selected={selectedFolder === 'trash'}
            />
          </MenuGroup>

          <MenuGroup title="Groups" action={{ icon: 'plus', handle: addNewFolder }}>
            {currentUser.folders.map(folder => (
              <MenuItem
                key={folder.id}
                title={folder.name}
                icon="folder"
                onClick={() => selectFolder(folder.id)}
                selected={selectedFolder === folder.id}
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
  selectedFolder: PropTypes.string,
};

const mapStateToProps = ({ currentUser, selectedFolder }) => ({ currentUser, selectedFolder });

export default connect(mapStateToProps)(Menu);
