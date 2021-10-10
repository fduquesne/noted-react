import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Avatar, Button } from '../../../components';

class ProfilePanel extends React.Component {
  render() {
    const { currentUser } = this.props;

    return (
      <div id="profile-panel">
        <Avatar user={currentUser} size="medium" />
        <div id="profile-name">{currentUser.name}</div>
        <div id="profile-button">
          <Button icon="chevron-down" color="default" size="small" onClick={() => {}} rounded />
        </div>
      </div>
    );
  }
}

ProfilePanel.propTypes = {
  currentUser: PropTypes.object,
};

const mapStateToProps = ({ currentUser }) => ({ currentUser });

export default connect(mapStateToProps)(ProfilePanel);
