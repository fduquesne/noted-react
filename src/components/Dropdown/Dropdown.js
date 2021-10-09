import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../components';

import './Dropdown.scss';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showOtherActions: false };

    this.showOtherActions = this.showOtherActions.bind(this);
  }

  showOtherActions() {
    this.setState({ showOtherActions: !this.state.showOtherActions });
  }

  render() {
    const { children, icon, label, color, size, rounded } = this.props;

    return (
      <div className="dropdown">
        <Button icon={icon} label={label} color={color} size={size} rounded={rounded} onClick={this.showOtherActions} />

        {this.state.showOtherActions && <div className="dropdown-items">{children}</div>}
      </div>
    );
  }
}

Dropdown.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string,
  rounded: PropTypes.bool,
  size: PropTypes.string.isRequired,
};

export default Dropdown;
