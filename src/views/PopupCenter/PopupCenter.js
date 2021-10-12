import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { connect } from 'react-redux';

import types from '../../constants/popup-types';
import actions from '../../store/actions';

import RemoveNotePopup from './RemoveNotePopup';

import './PopupCenter.scss';

class PopupCenter extends React.Component {
  render() {
    const { dispatch, currentPopup } = this.props;

    console.log('JE PASSE');
    console.log(currentPopup);

    return (
      <div id="popup-center" className={cx({ show: !!currentPopup })}>
        <div id="blur" onClick={() => dispatch(actions.closePopup())} />
        <RemoveNotePopup show={currentPopup === types.DELETE_NOTE} />
      </div>
    );
  }
}

PopupCenter.propTypes = {
  dispatch: PropTypes.func,
  currentPopup: PropTypes.string,
};

const mapStateToProps = state => ({ currentPopup: state.app.currentPopup });

export default connect(mapStateToProps)(PopupCenter);
