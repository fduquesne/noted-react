import React from 'react';
import cx from 'classnames';

import { Icon } from '../../components';

import './LoadingPage.scss';

class LoadingPage extends React.Component {
  constructor() {
    super();

    this.state = { interval: undefined, dots: '' };
  }

  componentDidMount() {
    const interval = setInterval(() => {
      let dots = '';

      if (this.state.dots === '') dots = '.';
      if (this.state.dots === '.') dots = '..';
      if (this.state.dots === '..') dots = '...';
      if (this.state.dots === '...') dots = '';

      this.setState({ dots });
    }, 500);

    this.setState({ interval });
  }

  componentWillUnmount() {
    this.setState({ interval: undefined });
  }

  render() {
    return (
      <div id="loading-page">
        <div id="container">
          <div id="logo" className={cx({ move: this.state.dots === '.' || this.state.dots === '...' })}>
            <Icon name="pencil" />
          </div>

          <div id="title">
            Noted
            <div id="dots">{this.state.dots}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoadingPage;
