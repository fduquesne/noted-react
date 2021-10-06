import React from 'react';

import { Button } from '../../../components';

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
        <div id="profile-image">
          <img src={require('../../../assets/img/profile1.jpg').default} alt="profile1" />
        </div>
        <div id="profile-name">Florian Duquesne</div>
        <div id="profile-button">
          <Button icon="chevron-up" color="default" size="small" onClick={this.showDropdown} rounded />
        </div>
      </div>
    );
  }
}

export default ProfilePanel;
