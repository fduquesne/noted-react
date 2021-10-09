import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../../components';

import './Input.scss';

class Input extends React.Component {
  render() {
    const { autofocus, icon, placeholder, value, onChange } = this.props;

    return (
      <div className="input">
        <input type="text" placeholder={placeholder} autoFocus={autofocus} value={value} onChange={onChange} />
        {icon && <Icon name={icon} />}
      </div>
    );
  }
}

Input.propTypes = {
  autofocus: PropTypes.bool,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Input;
