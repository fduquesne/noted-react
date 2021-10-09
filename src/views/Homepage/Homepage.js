import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../store/actions';

import Menu from './Menu';
import NoteList from './NoteList';
import NoteViewPanel from './NoteViewPanel';

import './Homepage.scss';

class Homepage extends React.Component {
  componentDidMount() {
    this.props.dispatch(actions.sync());
  }

  render() {
    const { isAppLoaded } = this.props;

    if (!isAppLoaded) return <></>;

    return (
      <div id="homepage">
        <Menu />
        <NoteList />
        <NoteViewPanel />
      </div>
    );
  }
}

Homepage.propTypes = {
  dispatch: PropTypes.func,
  isAppLoaded: PropTypes.bool,
};

const mapStateToProps = state => ({ isAppLoaded: state.app.isLoaded });

export default connect(mapStateToProps)(Homepage);
