import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../../store/actions';

import { Button } from '../../../components';

class Popup extends React.Component {
  render() {
    const { dispatch, submit, title } = this.props;

    const closePopup = () => dispatch(actions.closePopup());

    const handleKeyDown = e => {
      if (e.key === 'Enter') submit.handle();
    };

    return (
      <div className="popup" onKeyDown={handleKeyDown}>
        <div className="popup-header">
          <div className="popup-title">{title}</div>
          <div className="popup-close">
            <Button icon="x" color="default" size="small" rounded onClick={closePopup} />
          </div>
        </div>

        <div className="popup-body">{this.props.children}</div>

        <div className="popup-footer">
          <Button label="Cancel" color="default" size="small" onClick={closePopup} />
          <Button label={submit.name} color="primary" size="small" onClick={submit.handle} />
        </div>
      </div>
    );
  }
}

Popup.propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func,
  title: PropTypes.string.isRequired,
  submit: PropTypes.object.isRequired,
};

export default connect()(Popup);
