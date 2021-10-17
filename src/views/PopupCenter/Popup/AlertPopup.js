import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { connect } from 'react-redux';

import actions from '../../../store/actions';

import Popup from './Popup';

import { Button, Icon } from '../../../components';

class AlertPopup extends React.Component {
  render() {
    const { dispatch, icon, title, description, type, show, submit } = this.props;

    return (
      <Popup show={show} type="alert">
        <div className={cx('popup-icon', type)}>
          <Icon name={icon} />
        </div>
        <div className="popup-title">{title}</div>
        <div className="popup-description">{description}</div>
        <div className="popup-actions">
          <Button
            icon="x"
            label="Cancel"
            color="default"
            size="medium"
            onClick={() => dispatch(actions.closePopup())}
          />
          <Button icon={submit.icon} label={submit.name} color={type} size="medium" onClick={submit.handle} />
        </div>
      </Popup>
    );
  }
}

AlertPopup.propTypes = {
  dispatch: PropTypes.func,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  submit: PropTypes.object.isRequired,
};

export default connect()(AlertPopup);
