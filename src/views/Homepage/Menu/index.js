import React from 'react';

import MenuGroup from './MenuGroup';
import MenuItem from './MenuItem';
import ProfilePanel from './ProfilePanel';

import { Icon } from '../../../components';

class Menu extends React.Component {
  constructor() {
    super();

    this.addNewFolder = this.addNewFolder.bind(this);
  }

  addNewFolder() {
    console.log('ADD NEW FOLDER');
  }

  render() {
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
            <MenuItem title="All notes" icon="list" selected />
            <MenuItem title="Trash" icon="trash" />
          </MenuGroup>
          <MenuGroup title="Groups" action={{ icon: 'plus', handle: this.addNewFolder }}>
            <MenuItem title="Application redesign" icon="folder" />
            <MenuItem title="Professional projects" icon="folder" />
            <MenuItem title="To-do list" icon="folder" />
            <MenuItem title="Ideas" icon="folder" />
          </MenuGroup>
        </div>

        <ProfilePanel />
      </div>
    );
  }
}

export default Menu;
