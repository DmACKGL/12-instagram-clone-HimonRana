import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "../common/PrivateRoute";

import { Header, Footer} from "../";
import {
  Home,
  Profile,
  Explore,
  SignUp,
  SignIn,
  ProfileEdit,
  NotFoundPage
} from "../../views";

import "./App.css";

const App = children => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/profile" component={Profile} />
      <PrivateRoute path="/dashboard" component={ProfileEdit} />
      <Route path="/explore" component={Explore} />
      <Route path="/signup" component={SignUp} />
      <Route path="/home" component={Home} />
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </React.Fragment>
);

export default App;
