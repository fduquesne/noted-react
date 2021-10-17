import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../store/actions';

import AlertPopup from './Popup/AlertPopup';

class RemoveFolderPopup extends React.Component {
  render() {
    const { dispatch, show } = this.props;

    return (
      <AlertPopup
        icon="x"
        title="Are you sure?"
        description="Do you really want to delete this folder? This process cannot be undone."
        type="danger"
        show={show}
        submit={{ icon: 'trash', name: 'Delete', handle: () => dispatch(actions.deleteFolder()) }}
      />
    );
  }
}

RemoveFolderPopup.propTypes = {
  dispatch: PropTypes.func,
  show: PropTypes.bool.isRequired,
};

export default connect()(RemoveFolderPopup);
