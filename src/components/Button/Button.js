import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Icon } from '../../components';

import './Button.scss';

class Button extends React.Component {
  render() {
    const { color, icon, label, onClick, rounded, size } = this.props;

    return (
      <div className={cx('button', size, color, { rounded })} onClick={onClick}>
        {icon && (
          <div className="button-icon">
            <Icon name={icon} />
          </div>
        )}
        {label && <div className="button-label">{label}</div>}
      </div>
    );
  }
}

Button.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  rounded: PropTypes.bool,
  size: PropTypes.string.isRequired,
};

export default Button;
