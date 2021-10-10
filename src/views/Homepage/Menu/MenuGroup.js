import React from 'react';
import PropTypes from 'prop-types';

class MenuGroup extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="menu-group">
        <div className="menu-items">{children}</div>
      </div>
    );
  }
}

MenuGroup.propTypes = {
  children: PropTypes.node,
};

export default MenuGroup;
