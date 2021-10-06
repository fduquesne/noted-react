import React from 'react';
import PropTypes from 'prop-types';

import './Icon.scss';

class Icon extends React.Component {
  render() {
    const { name } = this.props;
    return <div className="icon" dangerouslySetInnerHTML={{ __html: require('./icons')[name] }} />;
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
