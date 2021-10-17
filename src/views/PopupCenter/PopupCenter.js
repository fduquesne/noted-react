import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { connect } from 'react-redux';

import types from '../../constants/popup-types';
import actions from '../../store/actions';

import CreateFolderPopup from './CreateFolderPopup';
import RemoveNotePopup from './RemoveNotePopup';
import RemoveFolderPopup from './RemoveFolderPopup';

import './PopupCenter.scss';

class PopupCenter extends React.Component {
  render() {
    const { dispatch, currentPopup } = this.props;

    return (
      <div id="popup-center" className={cx({ show: !!currentPopup })}>
        <div id="blur" onClick={() => dispatch(actions.closePopup())} />

        <CreateFolderPopup show={currentPopup === types.CREATE_FOLDER} />
        <RemoveNotePopup show={currentPopup === types.DELETE_NOTE} />
        <RemoveFolderPopup show={currentPopup === types.DELETE_FOLDER} />
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
