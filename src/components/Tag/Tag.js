import React from 'react';
import PropTypes from 'prop-types';

import './Tag.scss';

class Tag extends React.Component {
  render() {
    const { label } = this.props;

    return <div className="tag">{label}</div>;
  }
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Tag;
