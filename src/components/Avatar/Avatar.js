import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Avatar.scss';

class Avatar extends React.Component {
  render() {
    const { size, user } = this.props;

    return (
      <div className={cx('avatar', size)}>
        <img src={require(`../../assets/img/${user.image}`).default} alt="" />
      </div>
    );
  }
}

Avatar.propTypes = {
  size: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default Avatar;
