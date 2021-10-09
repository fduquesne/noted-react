import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Icon } from '../../../components';

class MenuItem extends React.Component {
  render() {
    const { icon, onClick, selected, title } = this.props;

    return (
      <div className={cx('menu-item', { selected })} onClick={onClick}>
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
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default MenuItem;
