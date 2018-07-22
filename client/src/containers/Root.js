import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import rootReducer from "../reducers";

import { App } from "components";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
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
