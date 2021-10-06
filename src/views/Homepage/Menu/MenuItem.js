import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Icon } from '../../../components';

class MenuItem extends React.Component {
  render() {
    const { icon, selected, title } = this.props;

    return (
      <div className={cx('menu-item', { selected })}>
        <div className="menu-item-icon">
          <Icon name={icon} />
        </div>
        <div className="menu-item-title">{title}</div>
      </div>
    );
  }
}

MenuItem.propTypes = {
  icon: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default MenuItem;
