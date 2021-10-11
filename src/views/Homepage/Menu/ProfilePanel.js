import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Avatar, Button } from '../../../components';

class ProfilePanel extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div id="profile-panel">
        <Avatar user={user} size="medium" />
        <div id="profile-name">{user.name}</div>
        <div id="profile-button">
          <Button icon="chevron-down" color="default" size="small" onClick={() => {}} rounded />
        </div>
      </div>
    );
  }
}

ProfilePanel.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(ProfilePanel);
