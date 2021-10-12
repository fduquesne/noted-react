import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Icon } from '../../components';

import './Input.scss';

class Input extends React.Component {
  render() {
    const { autofocus, icon, label, placeholder, value, size, onChange, onKeyDown } = this.props;

    return (
      <div className={cx(['input', size])}>
        {label && <div className="input-label">{label}</div>}

        <div className="input-container">
          <input
            type="text"
            placeholder={placeholder}
            autoFocus={autofocus}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          {icon && <Icon name={icon} />}
        </div>
      </div>
    );
  }
}

Input.propTypes = {
  autofocus: PropTypes.bool,
  icon: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
};

export default Input;
