import React from "react";
import { Route, Switch } from "react-router-dom";
import Grid from "./components/grid";
import NotFound from "./components/NotFound";
import SearchResultComponent from './components/SearchResults/SearchResultComponent';
import AccountOptionsComponent from './components/AccountOptions/AccountOptionsComponent';

export default () =>
  <Switch>
    <Route path="/" exact component={SearchResultComponent} />
    <Route path="/artists" exact component={NotFound} />
    <Route path="/messages" exact component={NotFound} />
    <Route path="/orders" exact component={NotFound} />
    <Route path="/search" exact component={SearchResultComponent}/>
    <Route path="/accountOptions" exact component={AccountOptionsComponent}/>
    <Route component={NotFound} />
  </Switch>;
