import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { App } from "components";

import rootReducer from 'reducers';

const middleware = [ thunk ];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Root;
