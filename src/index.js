import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import './style/App.css'
import Header from './components/Header/HeaderBar';
Amplify.configure(config)

const routing = (
  <Router>
    <App/>
  </Router>
)


ReactDOM.render(
  routing,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
