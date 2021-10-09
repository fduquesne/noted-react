import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../store/actions';

import CreateNewFolderPopup from './CreateNewFolderPopup';

import './PopupCenter.scss';

class PopupCenter extends React.Component {
  render() {
    const { dispatch, currentPopup } = this.props;

    if (!currentPopup) return <></>;

    return (
      <div id="popup-center">
        <div id="blur" onClick={() => dispatch(actions.closePopup())} />
        {currentPopup === 'CREATE_NEW_FOLDER' && <CreateNewFolderPopup />}
        {/* {currentPopup === 'CREATE_NEW_NOTE' && <CreateNewNotePopup />} */}
      </div>
    );
  }
}

PopupCenter.propTypes = {
  dispatch: PropTypes.func,
  currentPopup: PropTypes.string,
};

const mapStateToProps = ({ currentPopup }) => ({ currentPopup });

export default connect(mapStateToProps)(PopupCenter);
