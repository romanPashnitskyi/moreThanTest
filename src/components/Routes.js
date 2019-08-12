import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import store from '../store';

import MainPage from '../pages/MainPage'
import SecondPage from '../pages/SecondPage'
import ThirdPage from '../pages/ThirdPage'

const history = syncHistoryWithStore(createBrowserHistory(), store);

const Routes = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={ MainPage } />
          <Route path='/second' component={ SecondPage } />
          <Route path='/third' component={ ThirdPage } />
        </Switch>
      </Router>
    </Provider>
  )
};

export default Routes;
