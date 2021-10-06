import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../../components';

class MenuGroup extends React.Component {
  render() {
    const { children, action, title } = this.props;

    return (
      <div className="menu-group">
        {title && (
          <div className="menu-group-header">
            <div className="menu-group-title">{title.toUpperCase()}</div>
            {action && (
              <div className="menu-group-action">
                <Button icon={action.icon} color="default" size="small" onClick={action.handle} rounded />
              </div>
            )}
          </div>
        )}
        <div className="menu-items">{children}</div>
      </div>
    );
  }
}

MenuGroup.propTypes = {
  children: PropTypes.array.isRequired,
  action: PropTypes.object,
  title: PropTypes.string,
};

export default MenuGroup;
