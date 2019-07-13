import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import Search from "./components/search";

export default () =>
  <Switch>
    <Route path="/" exact component={Search} />
    <Route path="/artists" exact component={Search} />
    <Route path="/messages" exact component={Search} />
    <Route path="/orders" exact component={Search} />
    <Route component={NotFound} />
  </Switch>;
