import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Footer } from '../';
import {
  Home,
  Profile,
  Explore,
  SignUp,
  SignIn,
  NotFoundPage
} from "../../views";

import './App.css';

const App = (children) => (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/explore" component={Explore} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </React.Fragment>
)

export default App;