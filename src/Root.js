import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import MainApp from './containers/MainApp'
import reducer from './reducers'
import { Router, Route, Redirect, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { apiMiddleware } from 'redux-api-middleware'

const store = createStore(
  reducer,
  applyMiddleware(apiMiddleware)
)

const history = syncHistoryWithStore(browserHistory, store)

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route component={MainApp}>
        <Route path="/" />
        <Route path="/posts/:postId" />
        <Redirect from="*" to="/" />
      </Route>
    </Router>
  </Provider>
)

export default Root

