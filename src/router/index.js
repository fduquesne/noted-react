import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Homepage } from '../views';

class RouterManager extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default RouterManager;
