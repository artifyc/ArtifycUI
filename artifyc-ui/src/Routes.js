import React from "react";
import { Route, Switch } from "react-router-dom";
import Grid from "./components/grid";
import NotFound from "./components/NotFound";

export default () =>
  <Switch>
    <Route path="/" exact component={Grid} />
    <Route path="/artists" exact component={Grid} />
    <Route path="/messages" exact component={Grid} />
    <Route path="/orders" exact component={Grid} />
    <Route component={NotFound} />
  </Switch>;
