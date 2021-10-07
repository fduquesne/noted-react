import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../../components';

import './Input.scss';

class Input extends React.Component {
  render() {
    const { icon, placeholder } = this.props;

    return (
      <div className="input">
        <input type="text" placeholder={placeholder} />
        <Icon name={icon} />
      </div>
    );
  }
}

Input.propTypes = {
  icon: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
