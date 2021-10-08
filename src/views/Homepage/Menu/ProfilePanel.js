import React from 'react';

import { Avatar, Button } from '../../../components';

class ProfilePanel extends React.Component {
  constructor() {
    super();

    this.showDropdown = this.showDropdown.bind(this);
  }

  showDropdown() {
    console.log('SHOW PROFILE DROPDOWN');
  }

  render() {
    return (
      <div id="profile-panel">
        <Avatar user={{ image: 'profile1.jpg' }} size="medium" />
        <div id="profile-name">Florian Duquesne</div>
        <div id="profile-button">
          <Button icon="chevron-up" color="default" size="small" onClick={this.showDropdown} rounded />
        </div>
      </div>
    );
  }
}

export default ProfilePanel;
