import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Popup extends React.Component {
  render() {
    const { children, show, type } = this.props;

    return <div className={cx('popup', type, { show })}>{children}</div>;
  }
}

Popup.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};

export default Popup;
