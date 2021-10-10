import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../../store/actions';

import MenuGroup from './MenuGroup';
import MenuItem from './MenuItem';
import ProfilePanel from './ProfilePanel';

class Menu extends React.Component {
  render() {
    const { dispatch, currentUser, selectedFolder } = this.props;

    const selectFolder = id => {
      dispatch(actions.selectFolder(id));
    };

    return (
      <div id="menu">
        <ProfilePanel />

        <div id="menu-group-container">
          <MenuGroup>
            <MenuItem
              title="My notes"
              icon="list"
              onClick={() => selectFolder('my-notes')}
              selected={selectedFolder === 'my-notes'}
            />

            {currentUser.folders &&
              currentUser.folders.map(folder => (
                <MenuItem
                  key={folder.id}
                  title={folder.name}
                  icon={folder.icon}
                  onClick={() => selectFolder(folder.id)}
                  selected={selectedFolder === folder.id}
                />
              ))}
          </MenuGroup>
        </div>

        <div id="menu-footer">
          <MenuGroup>
            <MenuItem title="Add new folder" icon="plus" onClick={() => {}} />
            <MenuItem title="Settings" icon="settings" onClick={() => {}} />
          </MenuGroup>
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  dispatch: PropTypes.func,
  currentUser: PropTypes.object,
  selectedFolder: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const mapStateToProps = ({ currentUser, selectedFolder }) => ({ currentUser, selectedFolder });

export default connect(mapStateToProps)(Menu);
