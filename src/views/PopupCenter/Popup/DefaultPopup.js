import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../../store/actions';

import Popup from './Popup';

import { Button } from '../../../components';

class DefaultPopup extends React.Component {
  render() {
    const { children, dispatch, title, type, show, submit } = this.props;

    return (
      <Popup show={show} type="default">
        <div className="popup-header">
          <div className="popup-title">{title}</div>
        </div>

        <div className="popup-body">{children}</div>

        <div className="popup-footer">
          <Button icon="x" label="Cancel" color="default" size="small" onClick={() => dispatch(actions.closePopup())} />
          <Button icon={submit.icon} label={submit.name} color={type} size="small" onClick={submit.handle} />
        </div>
      </Popup>
    );
  }
}

DefaultPopup.propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  submit: PropTypes.object.isRequired,
};

export default connect()(DefaultPopup);
