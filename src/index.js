import React from "react";
import {ReactDOM, render} from "react-dom";
import "./index.css";
import {Route, Link, BrowserRouter, Switch} from "react-router-dom";
import SearchResultComponent from "./components/SearchResults/SearchResultComponent";
import NotFound from "./components/NotFound";
import ArtistPortfolioComponent from "./components/ArtistPortfolio/ArtistPortfolioComponent";
import App from "./App";

const routing = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/searchResult" component={SearchResultComponent} />
        <Route path="/artistPortfolio" component={ArtistPortfolioComponent} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(routing, document.getElementById("root"));
