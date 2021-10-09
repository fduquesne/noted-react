import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Icon } from '../../components';

class DropdownItem extends React.Component {
  render() {
    const { label, icon, color, onClick } = this.props;

    return (
      <div className={cx('dropdown-item', color)} onClick={onClick}>
        <div className="dropdown-item-icon">
          <Icon name={icon} />
        </div>
        <div className="dropdown-item-label">{label}</div>
      </div>
    );
  }
}

DropdownItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default DropdownItem;
