import React, { Component } from 'react';
import '../../style/HeaderBar.css'
import logo from '../../assets/logo.jpg'
import { Auth } from 'aws-amplify';
import { Route, Switch, Link, Redirect, Router } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute'
import history from '../History/history'

import Dashboard from '../Dashboard/Dashboard';
import HomePage from '../HomePage/HomePage';



class HeaderBar extends React.Component {

  constructor(props)  {
    super(props);
    this.state = {
        loggedIn: '',
        user: '',
      };
    this.isLoggedIn();
  }

  isLoggedIn = async () => {
    try {
        const user = await Auth.currentAuthenticatedUser({bypassCache:false});
        this.state.loggedIn = true;
        this.state.user = user;
        console.log(user);
    } catch (err) {
        this.state.loggedIn = false;
    }
  }

  render() {
      return (
        <div>
        <Router history={history}>
          <div>
            <div className="bar">
              <img className="logo" src={logo} height={75}/>
              <Link to='/' className="item" onClick={() => Auth.federatedSignIn()}>Sign In</Link>
              <Link to='/' className="item" onClick={() => Auth.federatedSignIn()}>Become a Creator</Link>
            </div>
            <Switch>
              <ProtectedRoute exact path='/' isLoggedIn={ this.state.loggedIn } userInfo = { this.state.user } component={HomePage} />
              <Route path="/dashboard" component={Dashboard} />
          </Switch>
         </div>
        </Router>
    </div>
      )
  }
}

export default HeaderBar;