import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MainApp from './containers/MainApp'
import reducer from './reducers'
import { Router, Route, Redirect, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const store = createStore(reducer)

const history = syncHistoryWithStore(browserHistory, store)

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route component={MainApp}>
        <Route path="/" />
      </Route>
    </Router>
  </Provider>
)

export default Root

