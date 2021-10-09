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
};

export default connect()(Homepage);
